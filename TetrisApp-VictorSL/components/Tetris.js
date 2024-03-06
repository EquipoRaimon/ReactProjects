import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { useState } from "react";
import { crearTablero, checkCollision } from "../AyudasJuego";
import { useJugador } from "../estados/useJugador";
import { useIntervalo } from "../estados/useIntervalo"
import { useTablero } from "../estados/useTablero";
import { useJuego } from "../estados/useJuego";
import Tablero from "./Tablero";
import MostarPuntosYNivel from "./MostrarPuntosYNivel";
import BotonInicioPausa from "./BotonInicioPausa";
import Botones from "./Botones";


export default function Tetris() {

  const [tiempoCaida, setTiempoCaida] = useState(null)
  const [perder, setPerder] = useState(false)

  const [jugador, updatePlayerPos, reiniciarJugador, playerRotate] = useJugador()
  const [tablero, setTablero, filasBorradas] = useTablero(jugador, reiniciarJugador)
  const [puntos, setPuntos, filas, setFilas, nivel, setNivel] = useJuego(filasBorradas)

  const [pausa, setPausa] = useState(false)

  function juegoPausado(){
    if (!perder) {
      if (!pausa) {
        setPausa(true)
        setTiempoCaida(null)
      }else{
        setTiempoCaida(1100 - 100 * (nivel + 1))
        setPausa(false)
      }
    }
  }

  function movePlayer(direction){
    if (!checkCollision(jugador, tablero, { x: direction, y: 0})) {
      updatePlayerPos({ x: direction, y: 0})
    }
  }

  function startGame(){
    // Inicia o Resetea el juego
    setTablero(crearTablero())
    setTiempoCaida(1000)
    reiniciarJugador()
    setPerder(false)
    setPuntos(0)
    setNivel(0)
    setFilas(0)
  }

  function drop(){
    if (filas > (nivel +1) * 3) {
      setNivel( (prev) => prev + 1)
      setTiempoCaida(1125 - 150 * (nivel + 1))
    }
    if (!checkCollision(jugador, tablero, { x: 0, y: 1})) {
      updatePlayerPos({ x: 0, y: 1, collided: false})
    } else{
      if (jugador.pos.y < 1) {
        setPerder(true)
        
        setTiempoCaida(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true})

    }
  }

  function dropPlayer(){
    setTiempoCaida(null);
    drop();
  }

  // PAra que cuando suelte el boton siga bajando la pieza (botón hacia abajo)
  function releaseKey(value) {
    if (!perder) {
      if (value === 2) {
        setTiempoCaida(1125 - 150 * (nivel + 1))
      }
    }
  }

  function move(value){
    if (!perder) {
      if (value === 1) {
        movePlayer(-1)
      } else if (value === 3) {
        movePlayer(1)
      } else if(value === 2){
        dropPlayer()
      } else if(value === 4){
        playerRotate(tablero, 1)
      }
    }
  }

  useIntervalo(() => drop() , tiempoCaida)

  return (
    <View style={styles.container}>
      <View style={styles.structure}>
        <View style={styles.display}>
          <View>
            {
              perder ? (
                <MostarPuntosYNivel text={"¡HAS PERDIDO!"} estiloBoton={['#000', 'red']} estiloText = '#000'/>
              ) : (
                <>
                  <MostarPuntosYNivel text={`Score: ${puntos}`} estiloBoton={['#8a6642', '#8a6642']} estiloText='#fff2d1'/>
                  <MostarPuntosYNivel text={`Level: ${nivel +1 }`} estiloBoton={['#8a6642', '#8a6642']} estiloText='#fff2d1'/>
                </>
              )
            }
          </View>
          <BotonInicioPausa onPress={startGame} onPressIn={juegoPausado}/>

        </View>
        <Tablero tablero={tablero} />
      </View>
      <Botones size={40} onPressIn={ move } onPressOut={ releaseKey }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff2d1',
    padding: Constants.statusBarHeight / 1,
    paddingTop: Constants.statusBarHeight / 1.4,
  },
  structure: {
    marginTop:10,
    alignItems: "center",
    
  },
  display: {
    display: 'block',
    padding: '0 80px'
  }
})
