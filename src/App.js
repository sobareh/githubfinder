import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

export default class App extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/sobareh",
    users: [
      {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/sobareh",
      },
      {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/sobareh",
      },
      {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/sobareh",
      },
    ],
  };

  render() {
    const name = "John Doe";
    const number = "Github Finder 2";

    return (
      <div className="App">
        <Navbar title={number} />
        <h1>Hello from React, {name}</h1>
        {this.state.users.length > 0 ? (
          this.state.users.map((user) => <UserItem user={user} />)
        ) : (
          <h4>Data Kosong...</h4>
        )}
      </div>
    );
  }
}
