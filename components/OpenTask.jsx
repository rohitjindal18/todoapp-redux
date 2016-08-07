import React from 'react';
class OpenTask extends React.Component {
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
			this.props.handleDragOpenTask(index);
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
	handleFirstSave(id){
		var title = this.refs.title.value;
		var descr = this.refs.description.value;
		var prior = this.refs.prio.value;
		this.props.handleSaveFirstTask(id , title , descr , prior);
	}
	render() {
		if(!this.props.isFirstTask & !this.props.isEditable){
			return(
				<tr id="rowsTable" draggable="true" onDrag={this.dragOpenTask.bind(this,this.props.id)} onDragLeave={this.dragLeave.bind(this)} key={this.props.id}><td>{this.props.id}</td><td>{this.props.title}</td><td>{this.props.description}</td><td>{this.props.priority}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/editTask.png" title="Edit" onClick={this.enableEditOption.bind(this , this.props.id)}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/deleteTask.png" title="Delete" onClick={this.deleteOpenTask.bind(this , this.props.id)}></img></td></tr>
			);
		}
		else if(this.props.isEditable) {
			return(
				<tr id="rowsTable" key={this.props.id}><td>{this.props.id}</td><td><input ref="title" type="text" defaultValue={this.props.title}></input></td><td><input ref="description" type="text" defaultValue={this.props.description}></input></td><td><select ref="prio" defaultValue={this.props.priority}><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/tickMark.png" title="Save" onClick={this.handleEditSave.bind(this , this.props.id)}></img></td></tr>
			);
		}
		else if(this.props.isFirstTask) {
			return(
				<tr id="rowsTable" key={this.props.id}><td>{this.props.id}</td><td><input ref="title" type="text" defaultValue="" placeholder={this.props.title}></input></td><td><input ref="description" type="text" defaultValue="" placeholder={this.props.description}></input></td><td><select ref="prio"><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../Images/tickMark.png" title="Save" onClick={this.handleFirstSave.bind(this , this.props.id)}></img></td></tr>
			);
		}
	}
};

OpenTask.propTypes = {
	isFirstTask : React.PropTypes.bool.isRequired,
	id : React.PropTypes.number.isRequired ,
	title : React.PropTypes.string.isRequired,
	description : React.PropTypes.string.isRequired,
	priority : React.PropTypes.string.isRequired,
	isEditable : React.PropTypes.bool.isRequired , 
	handleSaveFirstTask : React.PropTypes.func.isRequired,
	handleEnableEditOption : React.PropTypes.func.isRequired,
	handleSaveEditTask : React.PropTypes.func.isRequired,
	handleDragOpenTask : React.PropTypes.func.isRequired,
	handleDeleteOpenTask : React.PropTypes.func.isRequired
};

OpenTask.defaultProps = {
	isFirstTask : true
};

export default OpenTask;