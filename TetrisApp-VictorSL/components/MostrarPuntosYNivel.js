import { StyleSheet, Text, View } from "react-native";

export default function MostarPuntosYNivel({ text, estiloBoton, estiloText}) {

    const styles = StyleSheet.create({
        container: {
            borderWidth:2,
            borderRadius: 20,
            marginBottom: 10,
            padding: 5,
            alignItems: "center",
        },
      });



  return (
    <View style={{...styles.container, borderColor: estiloBoton[0], backgroundColor: estiloBoton[1]}}>
      <Text style={{color: estiloText}}>{text}</Text>
    </View>
  );
}