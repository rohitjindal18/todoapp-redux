
function openTaskList(state=[] , action) {
	switch(action.type){
		case 'ADD_OPENTASK':
			return [
				...state , Object.assign({} , ...state , action.opentask)
			]
		case 'SAVE_FIRSTTASK':
			return [
			...state.slice(0 , action.id) ,
			action.opentask,
			...state.slice(action.id)
			]
		case 'ENABLE_EDITOPTION':
			return [
			...state.slice(0 , action.id) ,
			{
				...state[action.id],
				isEditable: true
			},
			...state.slice(action.id)
			]
		case 'EDIT_OPENTASK':
			return [
			...state.slice(0 , action.id) ,
			action.opentask,
			...state.slice(action.id)
			]
		case 'DELETE_OPENTASK':
			return [
			...state.slice(0 , action.id) ,
			...state.slice(action.id+1)
			]
		default : 
			return state;
	}
}

export default openTaskList;