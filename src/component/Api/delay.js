import React from "react";
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
      <div>
        <h1>fetch</h1>
        {this.state.users ? (
          this.state.users.map((item, i) => (
            <div>
              <p>
                {i}---{item.first_name}
                {item.last_name}
              </p>
            </div>
          ))
        ) : (
          <CircularProgress disableShrink />
        )}
      </div>
    );
  }
}
