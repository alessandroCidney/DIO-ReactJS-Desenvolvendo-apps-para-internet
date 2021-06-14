import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'redux'
import styled from 'styled-components'

import fetchCientistas from './fetchCientistas'
import { getCientistas, getCientistasPending, getCientistasError } from './redux/reducers/cientistas'

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

class fetchComponent extends Component = {
	constructor(props) {
		super(props)
		this.state = {
			error: false,
			cientistas: [],
			pending: false
		}
	}

	componentDidMount() {
		const { fetchCientistas } = this.props
		fetchCientistas()
	}

	render() {
		const cientistas = this.state
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
}

const mapStateToProps = state => {
	return {
		error: getCientistasError(state),
		cientistas: getCientistas(state),
		pending: getCientistasPending(state)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchCientistas: fetchCientistas
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(fetchComponent);