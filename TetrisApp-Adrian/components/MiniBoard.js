import { StyleSheet, View } from "react-native";

import Cell from "./Cell";
import { Colors } from "../styles";

export default function MiniBoard({ nextPlayer }) {

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
        },
        StyledBoard: {
            borderColor: Colors.colors.light,
        },
        row: {
            flexDirection: "row",
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.StyledBoard}>
                {nextPlayer.map((row, rowIndex) => {
                    return (
                        <View key={rowIndex} style={styles.row}>
                            {
                                row.map((cell, cellIndex) =>
                                    <Cell key={cellIndex} type={cell} borderWidth={0} size={15}/>
                                )}
                        </View>
                    )
                })}
            </View>
        </View>
    );

}