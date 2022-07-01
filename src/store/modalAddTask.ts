import { makeAutoObservable } from "mobx";


type newInputType = {
	id?: number
	text?: string
};

type ObjectSubtasksType = {
	id?: number,
	subtask?: string,
	ok?: boolean,
}
type ObjectTasksType = {
	id?: number
	task?: string
	ok?: boolean
	subtasks: Array<ObjectSubtasksType>
};

class modalAddTask {
	isShowModal: boolean = false;

	allTasksArray: Array<ObjectTasksType> = [
		{
			id: 0,
			task: 'Перейти дорогу',
			ok: false,
			subtasks : [
				{
					id: 0,
					subtask: 'Серьёзный разговор',
					ok: false,
				},
				{
					id: 1,
					subtask: 'разговор',
					ok: false,
				}
			]
		},

		{
			id: 1,
			task: 'Перейти дорогу',
			ok: false,
			subtasks : [
				{
					id: 0,
					subtask: 'Серьёзный разговор',
					ok: false,
				},
				{
					id: 1,
					subtask: 'разговор',
					ok: false,
				}
			]
		},
		];

	inputsSubtaskArray : Array<newInputType> = [];

	newInput : newInputType = {
		id: 0,
		text: '',
	};

	constructor() {
		makeAutoObservable(this);
	}

	setShowModal(isShowModal:boolean){
		this.isShowModal = isShowModal;
	}

	addSubtask(){
		const newInput = {...this.newInput}
		newInput.id = this.inputsSubtaskArray.length;
		this.inputsSubtaskArray.push( newInput );
	}

	setCheckboxChange(taskId:number){
		this.allTasksArray[taskId].ok = !this.allTasksArray[taskId].ok;
	}

	removeTask(taskId:number){
		console.log(this.allTasksArray);
		const obj = this.allTasksArray.filter((task) => {
			console.log(task.id, taskId);
			return task.id !== taskId;
		});
		console.log(obj);
		this.allTasksArray = obj;
	}

	removeSubtask(taskId:number, subTaskId:number){

		const obj = this.allTasksArray.map((tasks) => {

			return {
				...tasks,
				subtasks: tasks.id === taskId ? tasks.subtasks.filter((subtask) => {
					console.log(subtask.id !== subTaskId);
					return subtask.id !== subTaskId;
				}) : tasks.subtasks
			};
		})

		this.allTasksArray = obj;
	}

	removeSubtaskInput(id:number){
		const obj = this.inputsSubtaskArray.filter((item) => item.id != id);

		this.inputsSubtaskArray = obj;
	}

	setTextSubtaskInput(id:number, text:string){
		this.inputsSubtaskArray[id].text = text;
	}
}

export default new modalAddTask();