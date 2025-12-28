import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/presentation/screens/Login'
import { Provider as PaperProvider } from 'react-native-paper'
import { paperTheme } from './src/shared/Theme/paperTheme'

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <LoginScreen />
    </PaperProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
