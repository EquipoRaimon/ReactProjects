import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CrearBotones() {

    const handleMoverIzquierda = () => {
        // Lógica para mover la pieza hacia la izquierda
        console.log('Mover izquierda');
      };
    
      const handleMoverDerecha = () => {
        // Lógica para mover la pieza hacia la derecha
        console.log('Mover derecha');
      };
    
      const handleMoverAbajo = () => {
        // Lógica para mover la pieza hacia abajo
        console.log('Mover abajo');
      };
    
      const handleRotar = () => {
        // Lógica para rotar la pieza
        console.log('Rotar');
      };

    return (
        <>
            <View style={styles.controles}>
                <TouchableOpacity onPress={handleMoverIzquierda}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>◀</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMoverDerecha}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>▶</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleRotar}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>↻</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles2.controles}>
                <TouchableOpacity onPress={handleMoverAbajo}>
                    <View style={styles2.button}>
                        <Text style={styles2.buttonText}>▼</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>

    )
};

const styles = StyleSheet.create({
    controles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        width: 80,
        height: 75,
        backgroundColor: '#111',
        borderRadius: 70,
        marginRight: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 80,
        marginTop: -17,
        margin:0,
    },
});

const styles2 = StyleSheet.create({
    controles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:-150,
        marginLeft: 40,
    },
    button: {
        width: 80,
        height: 75,
        backgroundColor: '#111',
        borderRadius: 100,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 80,
        marginTop: -4,
    },
});