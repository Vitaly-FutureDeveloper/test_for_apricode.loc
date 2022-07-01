import React from 'react';
import { Task } from "./Task/Task";

type PropsType = {

};
type StateType = {

};

export class MainTask extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<section className="todos-block">
				<div className="todos-block__btn-wrap">
					<button className="btn todos-block__btn">
						Добавить задачу
					</button>
				</div>

				<div className="tasks-wrap">
					<ol className="task-list">
						{/*<li className="task-list__item">*/}
							<Task />
						{/*</li>*/}
					</ol>
				</div>
			</section>
		);
	}

}