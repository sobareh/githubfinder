import React, { useContext } from 'react';
import UserItem from '../users/UserItem';
import Spinner from './Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  return (
    <div style={userStyle}>
      {!loading ? (
        users.length > 0 ? (
          users.map(user => <UserItem key={user.id} user={user} />)
        ) : (
          <h4>Data Kosong.....</h4>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
