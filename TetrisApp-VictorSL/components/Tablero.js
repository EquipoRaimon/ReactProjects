import { StyleSheet, View } from "react-native";

import Celdillas from "./Celdillas";

export default function Tablero({ tablero }) {

  const styles = StyleSheet.create({
    StyledBoard: {
      borderColor: '#000',
    },
    row: {
      flexDirection: "row",
      borderWidth:1
    }
  })

  return (
    <View style={styles.StyledBoard}>
      {tablero.map((row, rowIndex) => {
        return(
        <View key={rowIndex} style={styles.row}>
          {
            row.map((cell, cellIndex) =>
              <Celdillas key={cellIndex} type={cell[0]} />
            )}
        </View>
        )
      })}
    </View>
  );

}