import openTaskList from './openTaskList.jsx';
import inProgressTaskList from './inProgressTaskList.jsx';
import completedTaskList from './completedTaskList.jsx';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
	openTaskList , inProgressTaskList , completedTaskList});

export default rootReducer;