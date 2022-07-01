import React from 'react';
import modalAddTask from "../../../store/modalAddTask";
import {observer} from "mobx-react";


type PropsType = {
	id?: number
	text?: string
};
type StateType = {
	id?: number
	text?: string
};

@observer
class SubtaskInput extends React.Component<PropsType, StateType> {


	setTextSubtaskInput = (evt:any) => {
		evt.preventDefault();

		const id:number = evt.target.getAttribute('data-id');
		const text:string = evt.target.value;

		modalAddTask.setTextSubtaskInput( id, text );
	};


	removeSubtaskInput = (evt:any) => {
		evt.preventDefault();

		const id:number = evt.target.getAttribute('data-id');

		modalAddTask.removeSubtaskInput( id );
	};


	render(): React.ReactNode {
		const id:any = this.props.id;

		return (
			<li className="add-subtask__item" key={id}>
				<div className="add-subtask__item-block">
					<input data-id={id}
								 className="add-subtask__input"
								 onChange={this.setTextSubtaskInput}
								 value={modalAddTask.inputsSubtaskArray[id].text}
								 type="text" />

					<button className="btn btn-del"
									onClick={this.removeSubtaskInput}
									data-id={id} />
				</div>
			</li>
		);
	}

}

export default SubtaskInput;