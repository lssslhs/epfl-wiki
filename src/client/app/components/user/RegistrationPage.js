import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupForm from './SignupForm';
import * as userAuthAction from '../../actions/userAuthAction';

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: '',
        username: '',
        password: ''
      }
    };

    this.updateRegistrationInfo = this.updateRegistrationInfo.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  updateRegistrationInfo(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;

    return this.setState({user: user});
  }

  submitInfo(event) {
    event.preventDefault();
    alert('User Save');
    this.props.actions.Registration(this.state.user)
      .then(()=>{

      })
      .catch(error => {
        throw(error);
      });
  }

  render() {
    return (
        <SignupForm
          user={this.state.user}
          onChange={this.updateRegistrationInfo}
          onSave={this.submitInfo} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAuthAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
