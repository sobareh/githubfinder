import React from 'react';
import UserItem from '../users/UserItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
