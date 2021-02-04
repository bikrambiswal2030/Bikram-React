import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      open: false
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  loginUser = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        console.log(resJson.token);
        console.log(resJson.error);
        if (resJson.token) {
          this.setState({ message: "login sucessfull" });
        } else {
          this.setState({ message: "login failed" });
        }
      });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "darkblue",
          paddingBottom: "40vh"
        }}
      >
        <Grid container item justify="center" xs={12}>
          <Card style={{ marginTop: "100px" }}>
            <CardContent>
              <Grid container item justify="center">
                {this.state.message === "login sucessfull" ? (
                  <Avatar
                    variant="circle"
                    style={{ backgroundColor: "darkblue" }}
                  >
                    <LockOpenIcon />
                  </Avatar>
                ) : (
                  <Avatar
                    variant="circle"
                    style={{ backgroundColor: "darkblue" }}
                  >
                    <LockIcon />
                  </Avatar>
                )}
              </Grid>
              <Typography align="center" color="primary" variant="h6">
                Login
              </Typography>
              <br />
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={this.handleEmail}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  required="true"
                  margin="dense"
                  onChange={this.handlePassword}
                />
              </Grid>
            </CardContent>
            <CardActions>
              <Grid item container justify="center">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={
                    this.state.email === "" || this.state.password === ""
                      ? true
                      : false
                  }
                  onClick={this.loginUser}
                >
                  Login
                </Button>
              </Grid>
              <Snackbar
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                {this.state.message === "login failed" ? (
                  <Alert onClose={this.handleClose} severity="error">
                    {this.state.message}
                  </Alert>
                ) : (
                  <Alert onClose={this.handleClose} severity="success">
                    {this.state.message}
                  </Alert>
                )}
              </Snackbar>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
