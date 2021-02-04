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
  ListItemText
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

export default class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      progress: 10
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

  render() {
    return (
      <Grid container xs={12}>
        <Grid item container justify="center">
          <Typography align="center" color="primary" variant="h5">
            USERS
          </Typography>
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
    );
  }
}
