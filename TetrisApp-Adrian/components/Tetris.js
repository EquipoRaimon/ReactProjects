import { StyleSheet, View } from "react-native";
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

//Añadir vista empezar juego y cambiar startButton por reiniciar
//Función para ver la siguiente pieza
// Pausar el juego

export default function Tetris() {

  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
  const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer)
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

  function movePlayer(direction) {
    if (!checkCollision(player, board, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 })
    }
  }

  function startGame() {
    // Resetea el juego
    console.log("Hola")
    setBoard(createBoard())
    setDropTime(1200)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setLevel(0)
    setRows(0)
  }

  function drop() {
    if (rows > (level + 1) * 5) {
      setLevel((prev) => prev + 1)
      setDropTime(1200 - 200 * (level + 1))
    }

    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        console.log("Game Over")
        setGameOver(true)

        setDropTime(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })

    }
  }

  function dropPlayer() {
    setDropTime(null);
    drop();
  }

  // Que vuelva a iniciarse el dropTime cuando el jugador deje de tocar el botón
  function releaseKey(value) {
    if (!gameOver) {
      if (value === 2) {
        setDropTime(1200 - 200 * (level + 1))
      }
    }
  }

  function move(value) {
    if (!gameOver) {
      console.log(value)
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

  useInterval(() => drop(), dropTime)

  console.log('re-render')
  return (
    <View style={styles.container}>
      <View style={styles.DisplayStyles}>
        {
          gameOver ? (
            <Display text={"Game Over"} styleButton={[Colors.colors.danger, Colors.colors.dark]} styleText={Colors.colors.danger} />
          ) : (
            <>
              <Display text={`Score: ${score}`} styleButton={['#320B86', '#320B86']} styleText={Colors.colors.light} />
              <Display text={`Level: ${level + 1}`} styleButton={['#320B86', '#320B86']} styleText={Colors.colors.light} />
            </>
          )
        }
      </View>
      <StartButton onPress={startGame} />

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
  DisplayStyles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})
