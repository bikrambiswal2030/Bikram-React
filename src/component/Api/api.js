import { Button } from "@material-ui/core";
import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      color: ""
    };
  }

  handleClick = () => {
    fetch("http://www.colr.org/json/color/latest")
      .then((res) => res.json())
      .then((colors) => {
        console.log(colors);
        console.log(colors.colors);
        this.setState({
          color: "#" + colors.new_color
        });
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          width: "100vh",
          height: "100vh"
        }}
      >
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          color
        </Button>

        {console.log(this.state.color)}
      </div>
    );
  }
}
