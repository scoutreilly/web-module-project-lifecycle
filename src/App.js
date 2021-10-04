import React from "react";

import axios from "axios";
import UserCard from "./components/UserCard";

import gitLogo from "./assets/githublogo.png";
import Container from "./components/styled-components/ContainerStyled";
import Image from "./components/styled-components/ImageStyled";
import { HeaderOne } from "./components/styled-components/TextStyles";

class App extends React.Component {
  constructor() {
    super();
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
        })
      )
      .catch((err) => console.log(err));
  }

  // submitUser = (e) => {
  //   e.preventDefault();
  //   return <UserCard userDetails={this.state} />;
  // };

  render() {
    return (
      <div>
        <Container>
          <div>
            <Image src={gitLogo} alt="github logo" />
            <HeaderOne>Git User</HeaderOne>
            <UserCard userDetails={this.state} />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
