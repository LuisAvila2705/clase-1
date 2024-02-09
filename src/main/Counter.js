import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Counter({ datos }) {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <Button variant="primary" onClick={incrementarContador}>CLICK</Button>
            <p>Contador: {contador}</p>
            {datos.map((dato, index) => (
                <h1 key={index}>{dato}</h1>
            ))}
        </div>
    );
}

export default Counter;
