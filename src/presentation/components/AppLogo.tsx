import { Image, StyleSheet } from 'react-native'

const logo = require('../assets/Images/IconFinanceApp.png')

export function AppLogo({ size = 48 }) {
  return (
    <Image
      source={logo}
      style={{ width: size, height: size, borderRadius: size / 4 }}
    />
  )
}
