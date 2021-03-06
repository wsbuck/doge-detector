import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Photo from '@material-ui/icons/Photo';
import Pets from '@material-ui/icons/Pets';
import CircularProgress from '@material-ui/core/CircularProgress';

import { isInWebAppiOS, isiOS, isSafari } from '../utils';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  appBar: {
    justifyContent: 'center',
    display: 'grid',
    top: 'auto',
    bottom: 0,
    padding: 0,
    height: '6%',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    display: 'grid',
    zIndex: 1,
    top: -30,
    margin: theme.spacing(2),
  },
}));

export default function Input(props) {
  const classes = useStyles();
  const { modelLoaded, cameraStatus } = props;
  
  function handleImage(event) {
    props.getImage(URL.createObjectURL(event.target.files[0]))
  }

  function handlePredict() {
    if (!cameraStatus) {
      props.predict()
    }
  }

  function handleCamera() {
    props.updateCamera(!cameraStatus);
  }

  function handleImageUpload() {
    document.querySelector('#imgupload').click();
  }

  return (
    <>
      <input 
        type="file" id="imgupload"
        onChange={(event) => handleImage(event)}
      />
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          { ((!isiOS()) || (isSafari() && !isInWebAppiOS()))
            ? (
              <Fab 
                color="secondary" aria-label="turn on camera button" 
                className={classes.fabButton} onClick={handleCamera}
              >
                <PhotoCamera />
              </Fab>
            )
            : ( "" )
          }
          <Fab 
            color="secondary" aria-label="upload image button" 
            className={classes.fabButton} onClick={handleImageUpload}
            disabled={cameraStatus}
          >
            <Photo />
          </Fab>
          <Fab 
            color="secondary" aria-label="predict breed button" 
            className={classes.fabButton} onClick={handlePredict}
            disabled={!modelLoaded || cameraStatus}
          >
            {modelLoaded ? <Pets /> : <CircularProgress color="secondary" />}
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  )
}