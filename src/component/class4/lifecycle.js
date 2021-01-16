import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = (e) => {
    alert("Your favorite flavor is: " + this.state.value);
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="cocolate">cocolate</option>
            <option value="vanila">vanila</option>
            <option value="orange">orange</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
