import React, { useEffect, useState } from 'react';
import styles from 'styled-components';

const fetchBlock = styled.div`
	display: flex;
	flex-direction: column;
`;

const Item = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 12px;
	border: 1px solid #cecece;
`;

export const fetchComponent = {
	const [cientistas, setCientistas] = useState([]);

	useEffect(() => {
		fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
			.then(response => response.json())
			.then(data => {
				setCientistas(data).
			})
			.catch(error => {
				console.log(error);
			})
	}, []);

	return (
		<fetchBlock>
			<h1>Cientistas Brasileiras</h1>
			<ul>
				{cientistas.map((cientistas, index) => (
					<Item key={index}>
						<div><b>Nome: </b>{cientistas.nome}</div>
						<div><b>Area: </b>{cientistas.area}</div>
					</Item>
				))}
			</ul>
		</fetchBlock>
	)
}