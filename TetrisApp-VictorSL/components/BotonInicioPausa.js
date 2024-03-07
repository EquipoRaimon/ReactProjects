import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BotonInicioPausa({ onPress, onPressIn }) {

    const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
            padding: 10,
            borderRadius: 10,
            borderWidth:1,
            backgroundColor: '#fff2d1',
            justifyContent: "center",
            alignItems: "center",
        },

        b: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },

        text: {
            color: '#000',
        }
    });

    const styles2 = StyleSheet.create({
      container: {
          marginBottom: 10,
          padding: 10,
          borderRadius: 10,
          borderWidth:1,
          backgroundColor: '#a65e2e',
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 5,
          borderColor: '#a65e2e'
      },

      text: {
          color: '#fff2d1',
      }
  });

  return (
    <View style={styles.b}>
      <TouchableOpacity style={styles.container} onPress={() => {onPress()}}>
        <Text style={styles.text}>Empezar Juego</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles2.container} onPress={() => {onPressIn()}}>
        <Text style={styles2.text}>Pausa</Text>
      </TouchableOpacity>
    </View>
    
  );
}

