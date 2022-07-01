import React from 'react';
import Task from "./Task/Task";
import modalAddTask from "../../store/modalAddTask";

type PropsType = {

};
type ObjectSubtasksType = {
	id: number,
	subtask: string,
	ok: boolean,
}
type StateType = {
	id: number
	task: string
	ok: boolean
	subtasks : Array<ObjectSubtasksType>
};

export class MainTask extends React.Component<PropsType, StateType> {

	showModal = (evt:any) => {
		evt.preventDefault();
		modalAddTask.setShowModal( true );
	};

	render(): React.ReactNode {
		return (
			<section className="todos-block">
				<div className="todos-block__btn-wrap">
					<button className="btn todos-block__btn" onClick={this.showModal}>
						Добавить задачу
					</button>
				</div>

				<div className="tasks-wrap">
					<ol className="task-list">
						{ modalAddTask.allTasksArray.map((task, i) => <Task id={task.id} />) }

					</ol>
				</div>
			</section>
		);
	}

}