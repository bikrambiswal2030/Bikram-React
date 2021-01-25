import React from "react";
import Calculator from "./calculator";

export default class Calculator2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: ""
    };
  }

  render() {
    return (
      <div className="calc">
        <center>
          <h1>MY-CALCULATOR</h1>
          <div>
            <span className="input">input1</span>
            <input
              size="15"
              onChange={(e) => {
                this.setState({ num1: e.target.value });
              }}
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
            />
          </div>
          <br />
          <Calculator num1={this.state.num1} num2={this.state.num2} />
        </center>
      </div>
    );
  }
}
