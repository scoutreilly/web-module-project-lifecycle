import React from "react";
import axios from "axios";

import OneFollow from "./OneFollow";

class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/scoutreilly/followers")
      .then((response) =>
        this.setState({
          ...this.state,
          followers: response.data,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.followers.map((user) => {
          // console.log(user);
          return <OneFollow key={user.id} follower={user} />;
        })}
      </div>
    );
  }
}

export default Followers;
