import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CrearTablero from './src/components/tablero'
import CrearBotones from './src/components/botones';
import Inicio from './src/components/carga';

export default function App() {

  return (
    <View style={styles.container}>
      <Inicio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});