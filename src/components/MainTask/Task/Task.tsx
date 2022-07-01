import React from 'react';
import modalAddTask from "../../../store/modalAddTask";

import SubTask from "./SubTask";
import { observer } from "mobx-react";

type PropsType = {
	id?:number
};
type ObjectSubtasksType = {
	id?: number,
	subtask?: string,
	ok?: boolean,
}
type StateType = {
	id?: number
	task?: string
	ok?: boolean
	subtasks?: Array<ObjectSubtasksType>
};

@observer
class Task extends React.Component<PropsType, StateType> {

	onChangeCheckbox = (taskId:number) => {
		modalAddTask.setCheckboxChange( taskId );
	};

	removeTask = (evt:any) => {
		evt.preventDefault();

		const taskId:number = Number(evt.target.getAttribute('data-task-id'));

		modalAddTask.removeTask( taskId );
	};


	render(): React.ReactNode {
		const taskId:number = Number(this.props.id);

		return (
			<li key={taskId} className="task-list__item task">

				<div className="checkbox-wrap">
					<label className="checkbox-label">
						<input className="visually-hidden checkbox task-list__performed"
									 checked={modalAddTask.allTasksArray[taskId].ok}
									 onClick={ () => this.onChangeCheckbox( taskId ) }
									 type="checkbox" />
						<h3 className="task__title">{ modalAddTask.allTasksArray[taskId].task }</h3>
					</label>
					<button onClick={this.removeTask} data-task-id={taskId} className="btn btn-del"></button>
				</div>

				<ol className="subtask-list">

					{ modalAddTask.allTasksArray[taskId].subtasks.map((subtask) => <SubTask taskId={taskId} id={subtask.id} /> ) }

				</ol>

			</li>
		);
	}

}

export default Task;