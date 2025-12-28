import { View, StyleSheet } from 'react-native'
import { Text, Appbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BalanceCard } from '../components/BalanceCard'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Appbar.Header elevated={false} style={styles.header}>
        <Appbar.Content title="Finance-app" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="titleMedium">Hola, Santiago 👋</Text>

        <BalanceCard amount={12850.75} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 24,
  },
})
