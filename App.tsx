import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegadorBottom from './navigators/BottonNavigator';
import Navigator from './navigators/MainNavigator';
import Lista2Screen from './screens/Lista2Screen';
import PersonajesScreen from './screens/PersonajesScreen';


export default function App() {
  return (
    <Navigator/>
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
