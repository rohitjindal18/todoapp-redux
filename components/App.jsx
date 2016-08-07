import React from 'react';
import CreateNewTask from './CreateNewTask.jsx';
import OpenTask from './OpenTask.jsx';
import InProgressTask from './InProgressTask.jsx';
import CompletedTask from './CompletedTask.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id : 0,
      isDroppedOnInProgress : false,
      draggedOpenTask : 0,
      isDroppedOnCompleted : false ,
      draggedInProgressTask : 0
    };
  }
  saveFirstTask(id , title , description , priority) {
      var openTask = {
        "Id" : id ,
        "title" : title ,
        "description" : description ,
        "Priority" : priority ,
        "isFirstTask" : false,
        "isEditable" : false
      };
      this.props.saveCreateTask(id - 1 , openTask);
  }
  saveEditTask(id , title , description , priority) {
      var openTask = {
        "Id" : id ,
        "title" : title ,
        "description" : description ,
        "Priority" : priority ,
        "isFirstTask" : false,
        "isEditable" : false
      };

      this.props.editOpenTask(id - 1, openTask);
  }

  saveEditInProgressTask(id , title , description , priority){
      var inProgressTask = {
        "Id" : id ,
        "title" : title ,
        "description" : description ,
        "Priority" : priority ,
        "isFirstTask" : false,
        "isEditable" : false
      };

      this.props.editInProgressTask(id - 1 ,  inProgressTask);
  }
  deleteOpenTask(id) {
    this.props.deleteOpenTask(id - 1);
    this.setState({
      id : this.state.id - 1
    },this.changeOpenTaskList);
  }
  changeOpenTaskList() {
    var allOpenTasks = this.props.openTaskList;
    for(var i =0 ;i < allOpenTasks.length ; i++){
        allOpenTasks[i].Id = i+1;
        this.props.editOpenTask(i , allOpenTasks[i]);
    }
  }
  handleFirstTask() {
      var firstTask ={"Id":this.state.id+1 , "title":"Task1" , "description":"Description" ,"Priority":"P0" , isFirstTask : true , isEditable : false};
      this.props.addOpenTask(firstTask);
      this.setState({
        id : this.state.id + 1
      });
  }
  draggedFromOpenTask(index) {
     this.setState({
            isDroppedOnInProgress  :false,
            draggedOpenTask : this.state.draggedOpenTask = index
        })
  }
  draggedFromInProgressTask(index) {
      this.setState({
            isDroppedOnCompleted  :false,
            draggedInProgressTask : this.state.draggedInProgressTask = index
        })
  }
  enableEditOption(id){
    this.props.enableEditOption(id - 1);
  }

  enableEditInProgressOption(id){
    this.props.enableEditInProgressOption(id - 1);
  }
  handleDropOnInPorgress(ev) {
    ev.preventDefault();
    if(!this.state.isDroppedOnInProgress){
      this.props.deleteOpenTask(this.state.draggedOpenTask-1);
      var draggedTask = this.props.openTaskList[this.state.draggedOpenTask-1];
      var inProgressTaskL = this.props.inProgressTaskList;
      draggedTask.Id = inProgressTaskL.length+1;
      this.props.addInProgressTask(draggedTask);
      this.setState({
        isDroppedOnInProgress : true,
        id : this.state.id - 1
      },this.changeOpenTaskList);
    }
  }
  handleDropOnCompleted(ev){
    ev.preventDefault();
    if(!this.state.isDroppedOnCompleted){
      this.props.deleteInProgressTask(this.state.draggedInProgressTask-1);
      var draggedTask = this.props.inProgressTaskList[this.state.draggedInProgressTask-1];
      var completedTaskL = this.props.completedTaskList;
      draggedTask.Id = completedTaskL.length+1;
      this.props.addCompletedTask(draggedTask);
      this.setState({
        isDroppedOnCompleted : true,
        id : this.state.id - 1
      });
    }
  }
  preventDefault(event) {
        event.preventDefault();
  }
	render(){
    var component = this;
    var openTasks = this.props.openTaskList.map((task , index) =>
                              <OpenTask key={task.Id} id={task.Id} title={task.title} description={task.description} priority={task.Priority} isFirstTask={task.isFirstTask} isEditable={task.isEditable} handleSaveFirstTask = {component.saveFirstTask.bind(this)} handleEnableEditOption= {component.enableEditOption.bind(this)} handleSaveEditTask= {component.saveEditTask.bind(this)} handleDragOpenTask={component.draggedFromOpenTask.bind(this)} handleDeleteOpenTask={component.deleteOpenTask.bind(this)}/>
                            );
    var inProgressTasks = this.props.inProgressTaskList.map((task , index) =>
                              <InProgressTask key={task.Id} id={task.Id} title={task.title} description={task.description} priority={task.Priority} isEditable={task.isEditable} handleEnableEditOption= {component.enableEditInProgressOption.bind(this)} handleSaveEditTask= {component.saveEditInProgressTask.bind(this)} handleDragInProgressTask={component.draggedFromInProgressTask.bind(this)}/>
                            );
    var completedTasks = this.props.completedTaskList.map((task , index) =>
                              <CompletedTask key={task.Id} id={task.Id} title={task.title} description={task.description} priority={task.Priority}/>
                            ); 
		return(
				<div id="tododiv">
                <div id="centerImage"><img src="../Images/rohittodo.png"></img></div><br/><br/>
                <div id="CompleteDiv">
                    <div id="openDiv">
                        <img  src="../Images/open.png"></img>
                         <table >
                           <tbody>
                            <tr id="firstopenrow" ><td style={{"width":"40px"}}>S.No</td><td>Title</td><td>Description</td><td style={{"width":"70px"}}><select id="sortOnPrio" ref="prioopen" style={{"color":"white"}}><option>Priority</option><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td><td>Actions</td></tr>
                            {openTasks}
                            </tbody>
                        </table><br/>
                        <CreateNewTask handleAddNewTaskClick={this.handleFirstTask.bind(this)}/>
                    </div>
                    <div id="inProgressDiv" onDragOver={this.preventDefault} onDrop={this.handleDropOnInPorgress.bind(this)}>
                        <img  src="../Images/inprogress.png"></img>
                        <table>
                          <tbody>
                            <tr id="firstprogressrow"><td style={{"width":"40px"}}>S.No</td><td>Title</td><td>Description</td><td style={{"width":"70px"}}><select id="sortOnPrio" ref="prioinprogress" style={{"color":"white"}}><option>Priority</option><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td><td>Actions</td></tr>
                            {inProgressTasks}
                          </tbody>
                        </table> 
                    </div>
                    <div id="completedDiv" onDragOver={this.preventDefault} onDrop={this.handleDropOnCompleted.bind(this)}>
                        <img  src="../Images/completed.png"></img>
                        <table>
                           <tbody>
                             <tr id="firstcompleterow"><td style={{"width":"40px"}}>S.No</td><td>Title</td><td>Description</td><td style={{"width":"70px"}}><select id="sortOnPrio" ref="priocomplete" style={{"color":"white"}}><option>Priority</option><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></td></tr>
                            {completedTasks}
                           </tbody>
                        </table>
                    </div>
                </div>      
                <br/>
            </div>
			);
	}
};	

export default App;