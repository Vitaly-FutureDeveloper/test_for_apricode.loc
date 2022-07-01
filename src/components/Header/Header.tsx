import React from 'react';
import logoApricode from '../../assets/img/logo-apricode.png';

type PropsType = {

};
type StateType = {

};

export class Header extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<header className="header">

				<div className="header-container">
					<a className="header-container__logo-link" href="https://apri-code.ru/" target="_blank">
						<img src={logoApricode} alt="" />
					</a>

					<h1 className="header-container__title">ToDo List</h1>
				</div>

			</header>
		);
	}

}