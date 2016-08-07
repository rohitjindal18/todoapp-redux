import React from 'react';
class CompletedTask extends React.Component {
		constructor(props){
		super(props);
		this.state = {
			isDragLeft : false
		}
	}
	enableEditOption(id) {
		this.props.handleEnableEditOption(id);
	}
	deleteOpenTask(id) {
		this.props.handleDeleteOpenTask(id);
	}
	handleEditSave(id) {
		var title = this.refs.title.value;
		var descr = this.refs.description.value;
		var prior = this.refs.prio.value;
		this.props.handleSaveEditTask(id , title , descr , prior);
	}
	dragOpenTask(index){
		if(!this.state.isDragLeft){
			this.props.handleDragInProgressTask(index);
			this.setState({
				isDragLeft : true
			});
		}	
	}
	dragLeave(ev){
		this.setState({
			isDragLeft : false
		});
	}
	render() {
		if(!this.props.isEditable){
			return(
				<tr id="rowsTable" key={this.props.id}><td>{this.props.id}</td><td>{this.props.title}</td><td>{this.props.description}</td><td>{this.props.priority}</td></tr>
			);
		}
	}
};

export default CompletedTask;