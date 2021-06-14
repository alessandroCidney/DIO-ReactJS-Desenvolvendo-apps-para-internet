import React, { useState } from 'react';

const TodoListFunction = () => {

    const [items, setItems] = useState(['Tomate', 'Alface', 'Batata']);
    
    const addItem = (item) => {
        setItems([...items, item]);
    }

    const removeItem = () => {
        setItems([...items.slice(1)]);
    }

    return (
        <div className="bloco-lista">
            <p>Minha lista</p>
            <ul className="lista-estilizada">
                {items.map((item) => <li>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Abóbora')}>Adicionar</button>
            <button onClick={() => removeItem()}>Remover item</button>
        </div>
    );
}

export default TodoListFunction; 