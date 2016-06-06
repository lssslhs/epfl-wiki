import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="registration" activeClassName="active">Registration</Link>
    </nav>
  );
};

Header.propTypes = {

};

export default Header;
