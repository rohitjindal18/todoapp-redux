import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionContainers from '../actions/actionCreator.jsx';
import App from './App.jsx';

function mapStateToProps(state){
	return {
		openTaskList : state.openTaskList,
		inProgressTaskList : state.inProgressTaskList ,
		completedTaskList : state.completedTaskList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionContainers , dispatch);
}

const AppNew = connect(mapStateToProps , mapDispatchToProps)(App);

export default AppNew;
