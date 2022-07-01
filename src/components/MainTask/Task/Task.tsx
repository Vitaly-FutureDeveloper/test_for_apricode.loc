import React from 'react';


type PropsType = {

};
type StateType = {

};

export class Task extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<li className="task-list__item task">

				<div className="checkbox-wrap">
					<label className="checkbox-label">
						<input className="visually-hidden checkbox task-list__performed" type="checkbox" />
						<h3 className="task__title">Перейти дорогу на красный</h3>
					</label>
					<button className="btn btn-del"></button>
				</div>

				<ol className="subtask-list">

					<li className="subtask-list__item">
						<div className="checkbox-wrap">
							<label className="checkbox-label">
								<input className="visually-hidden checkbox subtask-list__performed" type="checkbox" />
								<span>Встать</span>
							</label>

							<button className="btn btn-del"></button>
						</div>
					</li>

					<li className="subtask-list__item">
						<div className="checkbox-wrap">
							<label className="checkbox-label">
								<input className="visually-hidden checkbox subtask-list__performed" type="checkbox" />
								<span>Бежать</span>
							</label>

							<button className="btn btn-del"></button>
						</div>
					</li>

				</ol>

			</li>
		);
	}

}