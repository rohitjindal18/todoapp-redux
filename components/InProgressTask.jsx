import React from 'react';
class InProgressTask extends React.Component {
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
				<tr id="rowsTable" draggable="true" onDrag={this.dragOpenTask.bind(this,this.props.id)} onDragLeave={this.dragLeave.bind(this)} key={this.props.id}><td>{this.props.id}</td><td>{this.props.title}</td><td>{this.props.description}</td><td>{this.props.priority}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/editTask.png" title="Edit" onClick={this.enableEditOption.bind(this , this.props.id)}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/deleteTask.png" title="Delete" onClick={this.deleteOpenTask.bind(this , this.props.id)}></img></td></tr>
			);
		}
		else if(this.props.isEditable) {
			return(
				<tr id="rowsTable" key={this.props.id}><td>{this.props.id}</td><td><input ref="title" type="text" defaultValue={this.props.title}></input></td><td><input ref="description" type="text" defaultValue={this.props.description}></input></td><td><select ref="prio" defaultValue={this.props.priority}><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/tickMark.png" title="Save" onClick={this.handleEditSave.bind(this , this.props.id)}></img></td></tr>
			);
		}
	}
};

export default InProgressTask;