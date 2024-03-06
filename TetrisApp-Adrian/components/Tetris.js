import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";

import { useState } from "react";

import { createBoard, checkCollision } from "../GameHelpers";

import { usePlayer } from "../hooks/usePlayer";
import { useInterval } from "../hooks/useInterval"
import { useBoard } from "../hooks/useBoard";
import { useGameStatus } from "../hooks/useGameStatus";

//Componentes
import Board from "./Board";
import Display from "./Display";
import StartButton from "./StartButton";
import Buttons from "./Buttons";

//Estilos
import { Colors } from "../styles";
import MiniBoard from "./MiniBoard";

//Función para ver la siguiente pieza

export default function Tetris() {

  // Estados propios de Tetris.js
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [pause, setPause] = useState(false)

  //Estados sacados de hooks
  const [player, updatePlayerPos, resetPlayer, playerRotate, nextPlayer] = usePlayer()
  const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer)
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

  function movePlayer(direction) {
    if (!checkCollision(player, board, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 })
    }
  }

  function startGame() {

    // Resetea el juego
    setPause(false)
    setBoard(createBoard())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setLevel(0)
    setRows(0)

  }

  function drop() {
    //Si se eliminan 5 filas el juego se acelera, va 200ms más rápido 
    if (rows >= (level + 1) * 5) {
      setLevel((prev) => prev + 1)
      setDropTime(1200 - 200 * (level + 1))
    }

    //Si no se detecta colisión se mueve el jugador
    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
      
    } else {
      //Si el jugador choca en la primera row, y = 0, pierde la partida
      if (player.pos.y < 1) {
        console.log("Game Over")
        setGameOver(true)

        setDropTime(null)
      }
      //Si se detecta colisión pero no en la primera fila, entonces la pieza ha colisionado 
      updatePlayerPos({ x: 0, y: 0, collided: true })

    }
  }

  //Si el jugador presiona el botón hacia abajo, el tienmpo de caida se anula para un movimineto más suave
  function dropPlayer() {
    setDropTime(null);
    drop();
  }

  // Que vuelva a iniciarse el dropTime cuando el jugador deje de tocar el botón
  function releaseKey(value) {
    if (!gameOver) {
      if (value === 2) {
        const minTime = 300
        setDropTime( Math.max(1200 - 200 * (level + 1), minTime) )
      }
    }
  }

  //Ejecuta funciones de movimiento o rotación dependiendo de el botón pulsado
  function move(value) {
    if (!gameOver) {
      
      if (value === 1) {
        movePlayer(-1)
      } else if (value === 3) {
        movePlayer(1)
      } else if (value === 2) {
        dropPlayer()
      } else if (value === 4) {
        playerRotate(board, -1)
      }
      else if (value === 5) {
        playerRotate(board, 1)
      }
    }
  }

  
  function pauseGame() {
    if (!gameOver) {

      if (pause) {
        setPause(false)
        const minTime = 300
        setDropTime( Math.max(1200 - 200 * (level + 1), minTime) )
      } else {
        setPause(true)
        setDropTime(null)
      }
    }

  }

  useInterval(() => drop(), dropTime)

  if (pause) {
    return (
      <View style={{ ...styles.container, justifyContent: "center", }}>
        <StartButton onPress={pauseGame} text={"Resume"} />
        <StartButton onPress={startGame} text={"Restart"} />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.displayStyles}>
        {
          gameOver ? (
            <Display text={"Game Over"} styleButton={[Colors.colors.danger, Colors.colors.dark]} styleText={Colors.colors.danger} />
          ) : (
            <>
              <Display text={`Score: ${score}`} styleButton={[Colors.colors.displayButton, Colors.colors.displayButton]} styleText={Colors.colors.light} />
              <Display text={`Level: ${level + 1}`} styleButton={[Colors.colors.displayButton, Colors.colors.displayButton]} styleText={Colors.colors.light} />
            </>
          )
        }
      </View>

      <View style={styles.displayButton}>
        <StartButton onPress={startGame} text={"Start"} />
        <MiniBoard nextPlayer={nextPlayer}/>
        <StartButton onPress={pauseGame} text={"Pause"} />

      </View>

      <Board board={board} />

      <Buttons size={40} onPressIn={move} onPressOut={releaseKey} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.colors.shadow,
    padding: Constants.statusBarHeight / 1.6,
    paddingTop: Constants.statusBarHeight / 1.2,
  },
  displayStyles: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  displayButton: {
    width: '100%',
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})
