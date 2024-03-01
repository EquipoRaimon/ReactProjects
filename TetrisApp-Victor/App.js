import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CrearTablero from './src/components/tablero'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TETRIS</Text>
      <CrearTablero/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});