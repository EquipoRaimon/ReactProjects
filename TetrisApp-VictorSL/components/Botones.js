import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Botones({ size, onPressIn, onPressOut }) {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(1)}>
                    {<Text style={styles.buttonText}>◀</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(3)}>
                    {<Text style={styles.buttonText}>▶</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPress={() => onPressIn(4)}>
                    {<Text style={styles.buttonText}>↻</Text>}
                </TouchableOpacity>
            </View>
            <View style={styles2.container}>
                <TouchableOpacity style={{ ...styles.button, width: size + 25, }} onPressIn={() => onPressIn(2)} onPressOut={() => onPressOut(2)}>
                    {<Text style={styles2.buttonText}>▼</Text>}
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    row: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        borderRadius: 36,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#8a6642',
        backgroundColor: '#8a6642',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff2d1',
        textAlign: 'center',
        fontSize: 70,
        marginTop: -17,
        margin: 0,
    },
})

const styles2 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 81,
    },
    button: {
        width: 80,
        height: 75,
        backgroundColor: '#111',
        borderRadius: 100,
        margin: 10,
    },
    buttonText: {
        color: '#fff2d1',
        textAlign: 'center',
        fontSize: 70,
        marginTop: -4,
    },
});