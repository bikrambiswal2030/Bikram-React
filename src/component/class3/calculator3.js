import React from "react";

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
      num2: "",
      sum: "",
      average: ""
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>CALCULATE AVERAGE</h1>
          <br />
          <div>
            <span className="input">input1</span>
            <input
              size="15"
              onChange={(e) => {
                this.setState({ num1: e.target.value });
              }}
              value={this.state.num1}
            />
          </div>
          <br />
          <div>
            <span className="input">input2</span>
            <input
              size="15"
              onChange={(e) => {
                this.setState({ num2: e.target.value });
              }}
              value={this.state.num2}
            />
          </div>

          <div>
            <br />
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
