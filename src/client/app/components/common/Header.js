import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({ user }) => {
  const testBlock = user.isLogin?
    (<p className="navbar-text navbar-right">{'Hi, '+ user.username}</p>):
    (<ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="registration">Sign in</Link>
      </li>
      <li>
        <Link to="registration">Sign up</Link>
      </li>
    </ul>);

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="navbar-menu"
            aria-expanded="false"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <IndexLink to="/" className="navbar-brand">EPFL WIKI</IndexLink>
        </div> {/* end of navbar header */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          {testBlock}
        </div> {/* end of navbar-menu */}
      </div> {/*end of container-fluid */}
    </nav>
  );
};

Header.propTypes = {
  user: React.PropTypes.object
};

export default Header;
