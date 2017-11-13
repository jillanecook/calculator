import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import FirstNumber from './FirstNumber';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          First Number: <FirstNumber/>
          </div>
      </div>
    );
  }
}

// This will add the result prop to App. Redux will set them from the state.
function mapStateToProps(state) {
  return {
      result: state.result,
  };
}

// This will add executeOperation prop to Board. Redux will set it from the action creator.
//const mapActionsToProps = { executeOperation };

// Connect Redux to this component.
export default connect(mapStateToProps)(App);