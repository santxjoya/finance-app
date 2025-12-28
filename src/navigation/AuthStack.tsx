import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../presentation/screens/Login'
import HomeScreen from '../presentation/screens/Home'

export type AuthStackParamList = {
  Login: undefined
  Home: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
