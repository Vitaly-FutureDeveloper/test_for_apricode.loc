import React from 'react';
import modalAddTask from "../../../store/modalAddTask";
import { observer } from "mobx-react";

type PropsType = {
	id?:number
	taskId?:number
};

type ObjectSubtasksType = {
	id?: number,
	subtask?: string,
	ok?: boolean,
};
type StateType = {
	id?: number
	task?: string
	ok?: boolean
	subtasks?: Array<ObjectSubtasksType>
};

@observer
class SubTask extends React.Component<PropsType, StateType> {

	removeSubtask = (evt:any) => {
		evt.preventDefault();

		const taskId:number = evt.target.getAttribute('data-task-id');
		const subTaskId:number = evt.target.getAttribute('data-sub-task-id');

		modalAddTask.removeSubtask( taskId, subTaskId );
	};

	render(): React.ReactNode {
		const taskId:number = Number(this.props.taskId);
		const subTaskId:number = Number(this.props.id);

		return (
			<li className="subtask-list__item">
				<div className="checkbox-wrap">
					<label className="checkbox-label">
						<input className="visually-hidden checkbox subtask-list__performed" type="checkbox" />
						<span>{ modalAddTask.allTasksArray[taskId].subtasks[subTaskId].subtask }</span>
					</label>

					<button onClick={this.removeSubtask} data-sub-task-id={subTaskId} data-task-id={taskId} className="btn btn-del"></button>
				</div>
			</li>
		);
	}

}

export default SubTask;