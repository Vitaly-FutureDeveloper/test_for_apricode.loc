import React from 'react';
import SubtaskInput from "./SubtaskInput";
import modalAddTask from "../../../store/modalAddTask";
import {observer} from "mobx-react";


type PropsType = {

};
type StateType = {
	id: number
	text: string
	isShowModal: boolean
};

@observer
class AddTodoModal extends React.Component <PropsType, StateType> {

	addNewSubtask = (evt:any) => {
		evt.preventDefault();
		modalAddTask.addSubtask();
	};

	closeModal = (evt:any) => {
		evt.preventDefault();
		modalAddTask.setShowModal( false );
	};


	render(): React.ReactNode {
		return !modalAddTask.isShowModal ? null : (
			<article className="modal">
				<header className="modal-header">
					<h2 className="modal-header__title">Добавьте задачу</h2>
					<button onClick={ this.closeModal } className="btn modal-header__close"></button>
				</header>

				<form action="" method="POST" className="task-form">
					<div className="checkbox-wrap">
						<input className="task-form__general-input" type="text" placeholder="Пожалуйста введите задачу" />
					</div>

					<div className="add-task">
						<button className="btn add-task__btn" onClick={this.addNewSubtask}>Добавить подзадачу</button>
					</div>

					<ol className="add-subtask">

						{ modalAddTask.inputsSubtaskArray.map((subtaskInput) => <SubtaskInput id={subtaskInput.id} />) }
						{/*<SubtaskInput />*/}

					</ol>

					<div className="add-task-btn-block">
						<button className="btn add-task-btn">Добавить в лист</button>
					</div>
				</form>
			</article>
		);
	}

}

export default AddTodoModal;