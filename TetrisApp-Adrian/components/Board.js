import { StyleSheet, View } from "react-native";

import Cell from "./Cell";
import { Colors } from "../styles";

export default function Board({ board }) {

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    StyledBoard: {
      borderWidth: 2,
      borderColor: Colors.colors.light,
    },
    row: {
      flexDirection: "row",
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.StyledBoard}>
        {board.map((row, rowIndex) => {
          return (
            <View key={rowIndex} style={styles.row}>
              {
                row.map((cell, cellIndex) =>
                  <Cell key={cellIndex} type={cell[0]} />
                )}
            </View>
          )
        })}
      </View>
    </View>
  );

}