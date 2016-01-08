import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NoteSection from '../components/NoteSection';
import * as NoteActions from '../actions/notes';

class App extends Component {
  render() {
    const { notes, dispatch } = this.props;
    const actions = bindActionCreators(NoteActions, dispatch);

    return (
      <div>
        <Header />
        <NoteSection notes={notes} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(App);
