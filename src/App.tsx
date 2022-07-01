import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainTask } from './components/MainTask/MainTask';
import { AddTodoModal } from "./components/Modals/AddTodoModal/AddTodoModal";

type PropsType = {

};
type StateType = {

};

class App extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<main className="page-main">
				<Header />
				<AddTodoModal />
				<MainTask />
				<Footer />
			</main>
		);
	}


}

export default App;
