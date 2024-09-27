import React from "react";

import Card from "./styled-components/CardStyled";
import Profile from "./styled-components/ProfileImage";

class UserCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
        <h3>{`${this.props.username}'s git details`}</h3>
        <Profile src={`${this.props.avatar}`} alt="profile image" />
        <p>Git Username: {this.props.login}</p>
        <p>Currently working at {this.props.company}</p>
        <p>{this.props.repos} public repos</p>
        <p>{this.props.followers} followers</p>
      </Card>
    );
  }
}

export default UserCard;
