import React, { Component } from 'react';

class PredictionOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createTable() {

  }

  render() {
    const { prediction } = this.props;
    return (
      prediction
        ? (
          <div className={prediction ? "card" : "hidden"}>
            <table>
              <tbody>
                {prediction.map((value, index) => {
                  return (
                    <>
                      <tr>
                        <th className="pred-object">{value.className}</th>
                        <th className="pred-percent">{value.probability}</th>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div >
        )
        : ""
    )
  }
}

export default PredictionOutput;