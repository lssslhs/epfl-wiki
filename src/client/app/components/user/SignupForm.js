import React from 'react';

const SignupForm = ({ user, onChange, onSave }) => {
  return (
    <div className="container-xs">
      <h1>Sign Up</h1>
      <form>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input type="text"
            className="form-control"
            name="username"
            value={user.username}
            placeholder="User Name"
            onChange={onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={onChange} />
        </div>

        <button className="btn btn-primary pull-right" onClick={onSave}>Sing up</button>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};

export default SignupForm;
