import React from 'react';

type PropsType = {

};
type StateType = {

};

export class SubtaskInput extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<li className="add-subtask__item">
				<div className="add-subtask__item-block">
					<input className="add-subtask__input" type="text" />
					<button className="btn btn-del"></button>
				</div>
			</li>
		);
	}

}