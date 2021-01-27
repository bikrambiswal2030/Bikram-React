import React from "react";
import "../style.css";

import { Switch, Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
var theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksArr: [],
      taskInput: "",
      tasksCompleted: [],
      todoTheme: ""
    };
  }
  handleInput = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };
  handlePush = () => {
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
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "100vh" }}>
            <center>
              <Grid container direction="column">
                <Typography variant="h1">Todo App</Typography>
              </Grid>

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
              <Button
                variant="contained"
                color="primary"
                size="small"
                disabled={this.state.taskInput === "" ? true : false}
                onClick={this.handlePush}
              >
                Add Task
              </Button>
            </center>
            <div class="float-container">
              <div class="float-child">
                {this.state.tasksArr.length === 0 ? (
                  <h2>You have No tasks to do</h2>
                ) : (
                  <h2>Tasks to do</h2>
                )}
                <div class="blue">
                  <ul>
                    {this.state.tasksArr.map((single, index) => {
                      return (
                        <li>
                          {single}
                          <br />
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={(e) => {
                              this.handleComplete(e, index, single);
                            }}
                          >
                            Completed
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div class="float-child2">
                {this.state.tasksCompleted.length === 0 ? (
                  <h2>No Task Completed</h2>
                ) : (
                  <h2>Tasks Completed</h2>
                )}
                <div class="green">
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
            </div>
          </Paper>
        </ThemeProvider>
      </div>
    );
  }
}
