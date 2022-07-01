import React from 'react';
import { SubtaskInput } from "./SubtaskInput";

type PropsType = {

};
type StateType = {

};

export class AddTodoModal extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<article className="modal">
				<header className="modal-header">
					<h2 className="modal-header__title">Добавьте задачу</h2>
					<button className="btn modal-header__close"></button>
				</header>

				<form action="" method="POST" className="task-form">
					<div className="checkbox-wrap">
						<input className="task-form__general-input" type="text" placeholder="Пожалуйста введите задачу" />
					</div>

					<div className="add-task">
						<button className="btn add-task__btn">Добавить подзадачу</button>
					</div>

					<ol className="add-subtask">

						<SubtaskInput />

					</ol>

					<div className="add-task-btn-block">
						<button className="btn add-task-btn">Добавить в лист</button>
					</div>
				</form>
			</article>
		);
	}

}