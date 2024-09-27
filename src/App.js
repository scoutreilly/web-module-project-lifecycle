import React from "react";

import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

import gitLogo from "./assets/githublogo.png";
import Container from "./components/styled-components/ContainerStyled";
import Image from "./components/styled-components/ImageStyled";
import { HeaderOne } from "./components/styled-components/TextStyles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/scoutreilly`)
      .then((response) =>
        this.setState({
          ...this.state,
          avatar_url: response.data.avatar_url,
          login: response.data.login,
          name: response.data.name,
          company: response.data.company,
          public_repos: response.data.public_repos,
          followers: response.data.followers,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Container>
          <div>
            <Image src={gitLogo} alt="github logo" />
            <HeaderOne>Git User</HeaderOne>
            <UserCard
              avatar={this.state.avatar_url}
              login={this.state.login}
              username={this.state.name}
              company={this.state.company}
              repos={this.state.public_repos}
              followers={this.state.followers}
            />
            <h2>{`See ${this.state.name}'s followers`}</h2>
            <Followers />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
