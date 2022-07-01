import React from 'react';


type PropsType = {

};
type StateType = {

};

export class Footer extends React.Component<PropsType, StateType> {



	render(): React.ReactNode {
		return (
			<footer className="footer">
				<strong>
					Компания Априкод занимается

					профессиональной разработкой сайтов и программного обеспечения

					для бизнеса наших клиентов

					и органов государственной власти любых масштабов
				</strong>

			</footer>
		);
	}

}