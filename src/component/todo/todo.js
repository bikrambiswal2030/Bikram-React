import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksArr: [],
      taskInput: "",
      tasksCompleted: []
    };
  }
  handleInput = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };
  hanldePush = () => {
    var a1 = this.state.tasksArr;
    a1.push(this.state.taskInput);
    this.setState({
      tasksArr: a1,
      taskInput: ""
    });
  };
  handleComplete = (e, index) => {
    var a1 = this.state.tasksArr;
    var a = a1.splice(index, 1);
    var a2 = this.state.tasksCompleted;
    a2.push(a[0]);
    this.setState({
      tasksCompleted: a2
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input
          style={{
            borderRadius: 10,
            height: 30,
            width: 175,
            outline: "none",
            marginRight: 20
          }}
          placeholder="Enter The Task"
          value={this.state.taskInput}
          onChange={this.handleInput}
        />
        <button
          disabled={this.state.taskInput === "" ? true : false}
          onClick={this.hanldePush}
        >
          Add Task
        </button>

        {this.state.tasksArr.length === 0 ? (
          <h2>You have No tasks to do</h2>
        ) : (
          <h2>Tasks to do</h2>
        )}
        <div>
          <ul>
            {this.state.tasksArr.map((single, index) => {
              return (
                <li>
                  {single}
                  <br />
                  <button
                    onClick={(e) => {
                      this.handleComplete(e, index, single);
                    }}
                  >
                    Completed
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {this.state.tasksCompleted.length === 0 ? (
          <h2>No Task Completed</h2>
        ) : (
          <h2>Tasks Completed</h2>
        )}
        <div>
          <ul>
            {this.state.tasksCompleted.map((single, index) => {
              return (
                <li>
                  {single}
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
