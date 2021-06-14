// Para testar componentes, usamos a React Testing Library

import React, { Fragment } from 'react';

function TestComponent(props) {
	return (
		<Fragment>
			O nome informado é {props.name}
		</Fragment>
	)
}

export default TestComponent;