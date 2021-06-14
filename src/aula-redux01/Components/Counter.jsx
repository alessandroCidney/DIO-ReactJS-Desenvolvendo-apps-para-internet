import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    state = { count: 0 }

    // Pedidos de alteração para incrementar e decrementar

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.increment}>+</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

// COnexta o componente com a Store;
export default connect(mapStateToProps)(Counter);