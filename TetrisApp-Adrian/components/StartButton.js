import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Typography } from "../styles";

export default function StartButton({ onPress, text}) {

    const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
            padding: 10,
            borderRadius: 10,
            borderWidth:1,
            backgroundColor: Colors.colors.gray,
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: Colors.colors.light,
            fontSize: Typography.fontSizes.body_2,
        }
    });

  return (
    <TouchableOpacity style={styles.container} onPress={() => {onPress()}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

