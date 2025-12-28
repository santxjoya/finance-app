import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/presentation/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './src/navigation/AuthStack'
import { Provider as PaperProvider } from 'react-native-paper'
import { paperTheme } from './src/shared/Theme/paperTheme'

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
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
