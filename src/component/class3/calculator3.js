import React from "react";
import "/Users/USER/Desktop/App stone/bikram-react/src/style/style.css";
export default class Calculator3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      sum: "",
      average: ""
    };
  }

  handleNum1 = (e) => {
    this.setState({
      num1: e.target.value
    });
  };

  handleNum2 = (e) => {
    this.setState({
      num2: e.target.value
    });
  };

  handleResult = () => {
    this.setState(
      {
        sum: parseInt(this.state.num1) + parseInt(this.state.num2)
      },
      () => {
        this.setState({
          average: (parseInt(this.state.num1) + parseInt(this.state.num2)) / 2
        });
      }
    );
  };
  handleClear = () => {
    this.setState({
      num1: "",
      num2: ""
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>CALCULATE AVERAGE</h1>
          <br />
          <span className="input">input1:</span>
          <input value={this.state.num1} onChange={this.handleNum1} />
          <br />
          <span className="input">input2:</span>
          <input value={this.state.num2} onChange={this.handleNum2} />
          <div>
            <button className="btn" onClick={this.handleResult}>
              RESULT
            </button>
            <button className="btn" onClick={this.handleClear}>
              CLEAR
            </button>
          </div>
          <div className="result">
            SUM:{this.state.sum}
            <br />
            AVERAGE:{this.state.average}
          </div>
        </center>
      </div>
    );
  }
}
