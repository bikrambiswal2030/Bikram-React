import React from "react";

export default class Arrays_Project extends React.Component {
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
  pushTask = () => {
    var temp = this.state.tasksArr;
    temp.push(this.state.taskInput);
    this.setState({
      tasksArr: temp,
      taskInput: ""
    });
  };
  handleComplete = (e, index) => {
    var temp = this.state.tasksArr;
    var ele = temp.splice(index, 1);
    var temp2 = this.state.tasksCompleted;
    temp2.push(ele[0]);
    console.log(ele[0]);
    this.setState({
      tasksArr: temp,
      tasksCompleted: temp2
    });
  };

  handleEnter = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13) {
      this.pushTask();
    }
  };

  render() {
    return (
      <div>
        <h1>Arrays Assignment!!!</h1>
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
          onKeyPress={this.handleEnter}
        />
        <button
          disabled={this.state.taskInput === "" ? true : false}
          onClick={this.pushTask}
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
          <h2>Please Complete The Task With Due Time</h2>
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
