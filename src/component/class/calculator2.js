import React from "react";
import Calculator from "./calculator";
import "/Users/USER/Desktop/App stone/bikram-react/src/style/style.css";
export default class Calculator2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: ""
    };
  }
  handleClear = () => {
    this.setState({
      num1: "",
      num2: ""
    });
  };

  render() {
    return (
      <div className="calc">
        <center>
          <h1>REACT-CALCULATOR</h1>
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
          <br></br>
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
          <br />

          <Calculator num1={this.state.num1} num2={this.state.num2} />
          <button className="btn" onClick={this.handleClear}>
            clear
          </button>
        </center>
      </div>
    );
  }
}
