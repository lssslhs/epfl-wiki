import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header user={this.props.user}/>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps)(App);
