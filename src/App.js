import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';
import Axios from 'axios';

import GithubState from './context/github/GithubState';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const github = Axios.create({
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
    },
  });

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await github.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    setRepos(res.data);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <>
                    <Search setAlert={showAlert} />
                    <Users />
                  </>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User {...props} getUserRepos={getUserRepos} repos={repos} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
