import { StyleSheet, Text, View } from "react-native";
import { Colors, Typography } from "../styles";

export default function Display({ gameOver, text, styleButton, styleText}) {

    const styles = StyleSheet.create({
        container: {
            borderWidth:2,
            borderRadius: 10,
            marginBottom: 10,
            padding: 5,
            alignItems: "center",
        },
        text: {
            fontSize: Typography.fontSizes.body_2,
        }
      });



  return (
    <View style={{...styles.container, borderColor: styleButton[0], backgroundColor: styleButton[1]}}>
      <Text style={{...styles.text, color: styleText}}>{text}</Text>
    </View>
  );
}