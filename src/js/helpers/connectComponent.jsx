// React imports
import React from 'react';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

// ===== End of imports ===== //

// ===== Functions to connect Redux to react component ===== //
const mapStateToProps = (state) => ({
  colors : state.colors,
  ui     : state.ui
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

// ===== Connecting Redux to react component ===== //
const ConnectComponent = (component) => connect(mapStateToProps, mapDispatchToProps)(component);

export default ConnectComponent;