function inProgressTaskList(state=[] , action) {
	switch(action.type){
		case 'ADD_INPROGRESSTASK':
			return[
				...state , Object.assign({} , state , action.inProgressTask)
			]
		case 'ENABLE_EDITINPROGRESSOPTION':
			return [
				...state.slice(0 , action.id),
				...state[action.id].isEditable = true,
				...state.slice(action.id)
			]
		case 'EDIT_INPROGRESSTASK':
			return [
				...state.slice(0 ,action.id),
				action.inProgressTask,
				...state.slice(action.id)
			]
		case 'DELETE_INPROGRESSTASK':
			return [
				...state.slice(0,action.id),
				...state.slice(action.id+1)
			]
		default:
		return state;
	}
}

export default inProgressTaskList;