function completedTaskList(state=[] , action) {
	switch(action.type){
		case 'ADD_COMPLETEDTASK':
			return [
				...state , Object.assign({} , state , action.completedTask)
			]
		default :
			return state;
	}
	return state;
}

export default completedTaskList;