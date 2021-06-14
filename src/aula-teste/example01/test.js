import React from 'react';
import TestComponent from './component'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testando o TestComponent', () => {
	it('O componente TestComponent deve renderizar corretamente', () => {
		const { baseElement } = render(<TestComponent name="Johnson" />);
		expect(baseElement).toHaveTextContent('O nome informado é Johnson');
	})
})