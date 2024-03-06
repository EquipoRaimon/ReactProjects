import React, { useState } from 'react';
import { colors } from '../styles/colors'
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import CrearTablero from './tablero';
import CrearBotones from './botones';
import SiguientePieza from './siguientePieza';

export default function Inicio() {
    const [vista, setVista] = useState('inicio'); // Estado para controlar la vista actual

    return vista === 'inicio' ? (
        <ImageBackground
            source={require('../assets/tetrisFondoInicio.webp')}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.title}>TETRIS</Text>
            </View>
            <TouchableOpacity
                style={styles.playButton}
                onPress={() => setVista('juego')}
            >
                <Text style={styles.playButtonText}>JUGAR</Text>
            </TouchableOpacity>
        </ImageBackground>
    ) : (
        <View> 
            <SiguientePieza/>
            <CrearTablero/>
            <CrearBotones/> 
           
        </View>
        
    )
}
const styles = {
    container: {
        width: "100%",
        height: "100%"

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80, // Adjust the value as per your design
    },

    title: {
        color: '#fff2d1', // Sample color for the text
        fontSize: 100, // Adjust the size as per your design
        fontWeight: 'bold',
    },

    playButton: {
        marginBottom: 350, // Adjust the value as per your design
        backgroundColor: '#fff2d1', // Sample purple color
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: "center",
        width: "50%",
        marginLeft: "25%"

    },

    playButtonText: {
        color: '#000',
        fontSize: 24, // Adjust the size as per your design
        fontWeight: 'bold',
    },
};