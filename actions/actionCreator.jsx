export function addOpenTask(opentask) {
	return {
		type : 'ADD_OPENTASK',
		opentask
	}
}

export function saveCreateTask(id , opentask) {
	return {
		type : 'SAVE_FIRSTTASK',
		id,
		opentask
	}
}

export function enableEditOption(id) {
	return {
		type : 'ENABLE_EDITOPTION',
		id
	}
}

export function enableEditInProgressOption(id) {
	return {
		type : 'ENABLE_EDITINPROGRESSOPTION',
		id
	}
}

export function editInProgressTask(id , inProgressTask) {
	return {
		type : 'EDIT_INPROGRESSTASK',
		id, 
		inProgressTask
	}
}

export function editOpenTask(id , opentask) {
	return {
		type : 'EDIT_OPENTASK',
		id,
		opentask
	}
}

export function deleteOpenTask(id) {
	return {
		type : 'DELETE_OPENTASK',
		id
	}
}

export function deleteInProgressTask(id) {
	return {
		type : 'DELETE_INPROGRESSTASK',
		id
	}
}

export function addInProgressTask(inProgressTask) {
	return {
		type : 'ADD_INPROGRESSTASK',
		inProgressTask
	}
}


export function addCompletedTask(completedTask) {
	return {
		type : 'ADD_COMPLETEDTASK',
		completedTask
	}
}