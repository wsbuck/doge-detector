import React, { useState, useEffect } from 'react';
import './App.css';
import doggo from './dog.png'
import outputClasses from './tfjs/outputClasses.json';

import * as tf from '@tensorflow/tfjs';

import ImageContainer from './components/ImageContainer';
import Input from './components/Input';
import PredictionOutput from './components/PredictionOutput';
import Header from './components/Header';

export default function App() {
  const [image, setImage] = useState(doggo);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [modelStatus, setModelStatus] = useState(false);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    loadModel()
      .then(loadedModel => {
        setModel(loadedModel);
        setModelStatus(true);
      })
  }, []);

  function checkDBExists(dbName) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(dbName);
      request.onupgradeneeded = function (e) {
        e.target.transaction.abort();
        resolve(false);
      }
      request.onsuccess = function(e) {
        resolve(true);
      }
    });
  }

  function loadModel() {
    return checkDBExists('tensorflowjs').then(async bool => {
      if (!bool) {
        console.log('downloading model...');
        const modelURL = (
          "https://s3-us-west-1.amazonaws.com/wsbuck/tfjs/model.json"
        );
        return await tf.loadLayersModel(modelURL);
      } else {
        return await tf.loadLayersModel('indexeddb://model');
      }
    }).then(model => {
      model.save('indexeddb://model');
      return model;
    }).catch(console.error);
  }

  function getImage(img) {
    setImage(img);
  }

  async function getTopKClasses(logits, topK) {
    const values = await logits.data();
    const valuesAndIndices = [];
    for (let i = 0; i < values.length; i++) {
      valuesAndIndices.push({ value: values[i], index: i });
    }

    valuesAndIndices.sort((a, b) => {
      return b.value - a.value;
    });
    const topKValues = new Float32Array(topK);
    const topKIndices = new Int32Array(topK);
    for (let i = 0; i < topK; i++) {
      topKValues[i] = valuesAndIndices[i].value;
      topKIndices[i] = valuesAndIndices[i].index;
    }

    const topClassesAndProbs = [];
    let percentageSum = 0.00;
    for (let i = 0; i < topKIndices.length; i++) {
      percentageSum += topKValues[i];
      topClassesAndProbs.push({
        className: outputClasses[topKIndices[i]],
        probability: topKValues[i]
      });
    }
    topClassesAndProbs.push({
      className: "Other",
      probability: 1.00 - percentageSum
    });
    return topClassesAndProbs;
  }

  async function predict() {
    const imgElement = document.querySelector('img');
    const logits = tf.tidy(() => {
      const img = tf.browser.fromPixels(imgElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat();
      const offset = tf.scalar(127.5);
      // Normalize the image from [0, 255] to [-1, 1].
      const normalized = img.sub(offset).div(offset);
      // Reshape to a single-element batch so we can pass it to predict.
      const batched = normalized.reshape([1, 224, 224, 3]);
      // Make a prediction through mobilenet.
      return model.predict(batched);
    });
    const classes = await getTopKClasses(logits, 3);
    setPrediction(classes);
  }

  return (
    <div className="App">
      <Header />
      <ImageContainer
        image={image}
        cameraStatus={cameraStatus}
        getImage={getImage}
      />
      <PredictionOutput
        prediction={prediction}
      />
      <Input
        updateCamera={setCameraStatus}
        cameraStatus={cameraStatus}
        predict={predict}
        modelLoaded={modelStatus}
        getImage={getImage}
      />
    </div>
  );
}