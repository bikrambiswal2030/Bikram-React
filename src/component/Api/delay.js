import React from "react";
import {
  Grid,
  Typography,
  List,
  Button,
  TextField,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Snackbar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
  Paper
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      progress: 10,
      dark: false
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?delay").then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data);
        this.setState({ users: result.data });
      });
    });
  }
  toggleTheme = () => {
    this.setState({
      dark: !this.state.dark
    });
  };

  render() {
    return (
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            type: this.state.dark ? "dark" : "light"
          }
        })}
      >
        <Paper style={{ height: "100vh" }}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Typography align="center" color="primary" variant="h5">
                USERS
              </Typography>
              <Button onClick={this.toggleTheme}>
                {this.state.dark ? <BrightnessHighIcon /> : <Brightness4Icon />}
                {this.state.dark ? "LIGHT MODE" : "DARK MODE"}
              </Button>
            </Grid>

            <Grid item container justify="center" xs={12}>
              {this.state.users ? (
                this.state.users.map((item, i) => (
                  <Grid>
                    <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                {item.first_name} {item.last_name}
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                {item.email}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                ))
              ) : (
                <CircularProgress disableShrink />
              )}
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }
}
