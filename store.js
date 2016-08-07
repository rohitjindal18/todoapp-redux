import { createStore } from 'redux'
import rootReducer from './reducer/combineReduce.jsx';

const openTaskList = [];
const inProgressTaskList = [];
const completedTaskList = [];

const defaultState = {
	openTaskList ,
	inProgressTaskList ,
	completedTaskList
};

const store = createStore(rootReducer , defaultState);

export default store;
