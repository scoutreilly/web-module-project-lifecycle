import React from "react";

import axios from "axios";

import gitLogo from "./assets/githublogo.png";
import Container from "./components/styled-components/ContainerStyled";
import Image from "./components/styled-components/ImageStyled";
import { HeaderOne } from "./components/styled-components/TextStyles";

class App extends React.Component {
  // handleInput = (e) =>
  // {
  //     this.setState({
  //         ...this.state,
  //         name: e.target.value
  //     });
  // };
  handleChanges = (e) => {
    // console.log(e.target.value);
    this.setState({ login: e.target.value });
    // console.log(this.state);
  };

  submitUser = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.login}`)
      .then((response) =>
        this.setState({
          ...this.state,
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          company: response.data.company,
          public_repos: response.data.public_repos,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <div>
            <Image src={gitLogo} alt="github logo" />
            <HeaderOne>Find a User</HeaderOne>
            <form onSubmit={this.submitUser}>
              <input
                type="text"
                name="username"
                placeholder="git username"
                onChange={this.handleChanges}
              />
              <button>and go!</button>
            </form>
          </div>
        </Container>
        <Container>
          <UserCard />
        </Container>
      </div>
    );
  }
}

export default App;
