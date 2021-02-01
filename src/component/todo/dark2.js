import React from "react";
import { Switch, Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { dark, light } from "@material-ui/core/styles/createPalette";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

export default class Dark2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false
    };
  }
  toggleTheme = () => {
    this.setState({
      dark: !this.state.dark
    });
  };
  render() {
    return (
      <div>
        <ThemeProvider
          theme={createMuiTheme({
            palette: {
              type: this.state.dark ? "dark" : "light"
            }
          })}
        >
          <Paper style={{ height: "100vh" }}>
            <Grid container>
              <Grid item xs={12}>
                <Button onClick={this.toggleTheme}>
                  {this.state.dark ? (
                    <BrightnessHighIcon />
                  ) : (
                    <Brightness4Icon />
                  )}
                  {this.state.dark ? "LIGHT MODE" : "DARK MODE"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </div>
    );
  }
}
