import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';

const Header = ({ loading, signOut, auth, user }) => {
  let loginLogoutLink = auth.isLogged ? (
    <LogoutLink signOut={signOut} />
  ) : (
    <LoginLink />
  );
  let adminLink = user.isAdmin ? <AdminLink /> : null;

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">
        Home
      </IndexLink>
      {' | '}
      <Link to="/about" activeClassName="active">
        About
      </Link>
      {' | '}
      <Link to="/protected" activeClassName="active">
        Protected
      </Link>
      {' | '}
      <Link to="/chat" activeClassName="active">
        Chat
      </Link>
      {adminLink}
      {' | '}
      {loginLogoutLink}
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
