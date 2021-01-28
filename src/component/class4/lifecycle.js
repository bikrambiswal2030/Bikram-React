import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Bikram" };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    this.setState({
      car: "you are in the profile of " + this.state.value
    });

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Profile</h1>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Bikram">BIKRAM</option>
              <option value="Amit">AMIT</option>
              <option value="Saswat">SASWAT</option>
              <option value="Anil">ANIL</option>
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
