import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CrearBotones from './botones';

export default function CrearTablero() {
  const [Tablero, setTablero] = useState(tableroVacio());

  function tableroVacio() {
    return Array.from({ length: 20 }, () => Array(10).fill(0));
  }

  return (
    <View>
      {Tablero.map((fila) => {
        return (
          <View style={styles.fila}>
            {fila.map((cell) => {
              return(
                <View style={[styles.cell]} />
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    marginLeft:20,
  },
  cell: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#000',
    
  },
});


