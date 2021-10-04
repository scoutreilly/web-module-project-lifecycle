import React from "react";

import Profile from "./styled-components/ProfileImage";
import Card from "./styled-components/CardStyled";

class OneFollow extends React.Component {
  render() {
    return (
      <Card>
        <h3>{this.props.follower.login}</h3>
        {console.log(this.props)}
        <Profile src={this.props.follower.avatar_url} alt="profile pic" />
        <p>
          <a href={this.props.follower.html_url}>See in GitHub</a>
        </p>
      </Card>
    );
  }
}

export default OneFollow;
