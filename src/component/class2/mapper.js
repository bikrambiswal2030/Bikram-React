import React from "react";

export default class Mapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [
        {
          name: " Bikram ",
          code: "React JS"
        },

        {
          name: "Trupti",
          code: "phython"
        },
        {
          name: "saswat",
          code: "Android"
        }
      ]
    };
  }

  handleInput1 = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleInput2 = (e) => {
    this.setState({
      code: e.target.value
    });
  };

  handleAdd = () => {
    var a1 = this.state.a;
    a1.push({
      name: this.state.name,
      code: this.state.code
    });
    this.setState({
      a: a1,
      name: "",
      code: ""
    });
  };

  handleDelete = (e, code) => {
    var a1 = this.state.a;
    a1.splice(code, 1);
    this.setState({
      a: a1
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>USER</h1>
          {this.state.a.map((obj, code) => {
            return (
              <div>
                {obj.name} {obj.code}
                <button
                  className="btn"
                  onClick={(e) => {
                    this.handleDelete(e, code);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <h1>ADD USER</h1>
          <span className="input">Name:</span>
          <input value={this.state.name} onChange={this.handleInput1} />
          <span className="input">Code:</span>
          <input value={this.state.code} onChange={this.handleInput2} />
          <button onClick={this.handleAdd}>ADD USER</button>
        </center>
      </div>
    );
  }
}
