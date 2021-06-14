import React, { useState } from 'react';
import ListOfWords from './ListOfWords.jsx';

class WordAdder extends React.Component = {
	constructor(props) {
		super(props);
		this.state = {
			words: ['palavra1']
		}
		this.handleClick = this.handleClick.bind(this);
	}


	/*
	
	Isso não funcionará com Pure Components, pois a estrutura está sendo alterada
	de maneira bruta:

	handleClick() {
		const words = this.state.words;
		words.push('potato');
		this.setState({words: words})
	}

	*/

	// O certo é criar uma cópia para manter a estrutura imutável:

	handleClick() {
		this.setState(state => ({
			words: [...state.words, 'potato']
		}));
	}

	// Ou utilizar bibliotecas como a Immutable.js

	/*
		Trecho de código mutável:

		const x = { foo: 'bar' };
		const y = x;
		y.foo = 'baz';
		x === y; // true, pois o valor de x também é alterado

		Trecho do código com Immutable.js

		const SomeRecord = Immutable.Record({ foo: null });
		const x = new SomeRecod({ foo: 'bar' });
		const y = x.set({ foo: 'baz' });
		const z = x.set({ foo: 'bar' });

		x===y; // true
		x===z; // false

		Outras bibliotecas:

		Immer, Immutability-helper, Seamless-immultable

	*/

	render() {
		return ( 
			<div>
				<button onClick={this.handleClick()} />
				<ListOfWords words={this.state.words} />
			</div>
		)
	}
}