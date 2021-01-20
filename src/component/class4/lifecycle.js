import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = (e) => {
    this.setState({
      car: "your favorate car is : " + this.state.value
    });

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>PICK YOUR FAVORATE CAR</h1>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="AUDI">audi</option>
              <option value="BMW">bmw</option>
              <option value="RANGE ROVER">range rover</option>
              <option value="MERCEDES">mercedes</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>{this.state.car}</div>
      </div>
    );
  }
}
