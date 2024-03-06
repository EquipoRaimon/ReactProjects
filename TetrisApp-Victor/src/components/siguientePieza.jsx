import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Piezas } from './piezas';

const coloresPiezas = {
    1: '#00FFFF', // Cyan, pieza I
    2: '#0000FF', // Azul, pieza J
    3: '#FFA500', // Naranja, pieza L
    4: '#FFFF00', // Amarillo, pieza O
    5: '#00FF00', // Verde, pieza S
    6: '#800080', // Púrpura, pieza T
    7: '#FF0000', // Rojo, pieza Z
};

const SiguientePieza = () => {
    const [siguientePieza, setSiguientePieza] = useState([]);
    const [colorPieza, setColorPieza] = useState('');

    useEffect(() => {
        const piezas = Piezas();
        const piezaAleatoria = Math.floor(Math.random() * piezas.length);
        const piezaSeleccionada = piezas[piezaAleatoria];
        setSiguientePieza(piezaSeleccionada);

        // Busco la pieza que sea distinto de 0 para agregar el color
        const tipoPieza = piezaSeleccionada.flat().find(elemento => elemento !== 0);
        setColorPieza(coloresPiezas[tipoPieza]);
    }, []);

    return (
        <View>
            <Text style={{marginLeft:100}}>Siguente figura:</Text>
            {siguientePieza.map((fila) => (
                <View style={{ flexDirection: 'row', marginLeft:120, }}>
                    {fila.map((celda) => (
                        <View style={{
                            width: 25,
                            height: 25,
                            backgroundColor: celda ? colorPieza : 'transparent',
                            borderWidth: celda ? 1 : 0, // Aplica un borde si celda no es 0.
                            borderColor: celda ? 'black' : 'transparent', // Puedes ajustar el color del borde si es necesario
                        }} />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default SiguientePieza;

