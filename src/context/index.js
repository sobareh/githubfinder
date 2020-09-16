import React from 'react';
import GithubState from './github/GithubState';
import AlertState from './alert/AlertState';

const Provider = props => {
  return (
    <GithubState>
      <AlertState>{props.children}</AlertState>
    </GithubState>
  );
};

export default Provider;
