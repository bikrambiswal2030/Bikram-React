import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Ex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      tasksArr: [],
      taskInput: "",
      tasksCompleted: [],
      tasksUndo: []
    };
  }
  openDialog = () => {
    this.setState({ open: true });
  };
  closeDialog = () => {
    this.setState({ open: false });
  };

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
  handleComplete = (index) => {
    var a1 = this.state.tasksArr;
    var a = a1.splice(index, 1);
    var a2 = this.state.tasksCompleted;
    a2.push(a[0]);
    this.setState({
      tasksCompleted: a2
    });
  };
  handleUndo = (index) => {
    var a2 = this.state.tasksCompleted;
    var b = a2.splice(index, 1);
    var b2 = this.state.tasksUndo;
    b2.push(b[0]);
    this.setState({
      tasksArr: b2
    });
  };
  handleDelete = (index) => {
    var a2 = this.state.tasksCompleted;
    a2.splice(index, 1);
    this.setState({
      tasksCompleted: a2
    });
  };
  render() {
    return (
      <div className="App">
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

        <div class="float-container">
          <div class="float-child">
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
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => {
                          this.handleComplete(index, single);
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
            <div>
              <ul>
                {this.state.tasksCompleted.map((single, index) => {
                  return (
                    <li>
                      {single}
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {
                          this.handleUndo(index, single);
                        }}
                      >
                        Undo
                      </Button>

                      <Button
                        variant="contained"
                        style={{ backgroundColor: "darkred" }}
                        size="small"
                        onClick={this.openDialog}
                      >
                        DELETE
                      </Button>
                      <Dialog
                        open={this.state.open}
                        onClose={this.closeDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Delete the task"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Are you sure you want to do this?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.closeDialog} color="primary">
                            Cancel
                          </Button>
                          <Button
                            color="primary"
                            onClick={() => {
                              {
                                this.handleDelete(index);
                              }
                            }}
                            onClose={this.closeDialog}
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
