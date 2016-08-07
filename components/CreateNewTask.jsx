import React from 'react';
class CreateNewTask extends React.Component {
	addNewTask(){
		this.props.handleAddNewTaskClick();
	}
	render() {
		return(
				<button id="addnewtask" onClick={this.addNewTask.bind(this)}> Add New Task </button>
			);
	}
};

export default CreateNewTask;