import { MD3LightTheme } from 'react-native-paper'

export const paperTheme = {
  ...MD3LightTheme,
  roundness: 10,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007AFF', // Azul iOS
    secondary: '#007AFF',
    background: '#F2F2F7',
    surface: '#FFFFFF',
  },
}
