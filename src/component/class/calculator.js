import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  handleSum = (e) => {
    this.setState({
      result: parseInt(this.props.num1) + parseInt(this.props.num2)
    });
  };

  handleSub = () => {
    this.setState({
      result: parseInt(this.props.num1) - parseInt(this.props.num2)
    });
  };

  handleMul = () => {
    this.setState({
      result: parseInt(this.props.num1) * parseInt(this.props.num2)
    });
  };

  handleDiv = () => {
    this.setState({
      result: parseInt(this.props.num1) / parseInt(this.props.num2)
    });
  };
  handleClear = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div>
        <center>
          <button className="btn" onClick={this.handleSum}>
            ADD
          </button>

          <button className="btn" onClick={this.handleSub}>
            SUB
          </button>
          <button className="btn" onClick={this.handleMul}>
            MULTIPLY
          </button>
          <button className="btn" onClick={this.handleDiv}>
            DIVISION
          </button>
          <button className="btn" onClick={this.handleClear}>
            clear
          </button>

          <br />
          <div className="result">The Result is: {this.state.result}</div>
        </center>
      </div>
    );
  }
}
