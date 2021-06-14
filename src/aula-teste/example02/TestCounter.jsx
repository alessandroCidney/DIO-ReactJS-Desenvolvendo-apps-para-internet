import React from 'react';
import { connect } from 'react-redux';

class TestCounter extends React.Component {
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
                    <span data-testid={"count-value"}>{this.props.count}</span>
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
export default connect(mapStateToProps)(TestCounter);