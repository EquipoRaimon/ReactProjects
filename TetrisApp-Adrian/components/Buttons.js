import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from "../styles";

export default function Buttons({ size, onPressIn, onPressOut }) {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(1)}>
                    {<FontAwesome6 name="arrow-left" size={size} color={Colors.colors.white} />}
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPressIn={() => onPressIn(2)} onPressOut={() => onPressOut(2)}>
                    {<FontAwesome6 name="arrow-down" size={size} color={Colors.colors.white}/>}
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(3)}>
                    {<FontAwesome6 name="arrow-right" size={size} color={Colors.colors.white} />}
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(4)}>
                    {<FontAwesome6 name="arrow-rotate-left" size={size} color={Colors.colors.white} />}
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(5)}>
                    {<FontAwesome6 name="arrow-rotate-right" size={size} color={Colors.colors.white} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        borderRadius: 35,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: Colors.colors.primary,
        backgroundColor: Colors.colors.muted,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})