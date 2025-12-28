import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {/* HEADER – NO se mueve */}
      <Appbar.Header style={styles.header} elevated={false}>
        <Appbar.Content
          title="Finance-app"
          titleStyle={styles.headerTitle}
        />
      </Appbar.Header>

      {/* CONTENIDO – sí se mueve */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Text variant="titleLarge" style={styles.title}>
              Sign In
            </Text>

            <TextInput
              label="Email"
              mode="outlined"
              dense
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              outlineStyle={styles.outline}
            />

            <TextInput
              label="Password"
              mode="outlined"
              dense
              style={styles.input}
              secureTextEntry
              returnKeyType="done"
              outlineStyle={styles.outline}
            />

            <Button
              mode="contained"
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              Continue
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    elevation: 0,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 150,
  },
  title: {
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: '600',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  outline: {
    borderRadius: 12,
  },
  button: {
    borderRadius: 12,
    marginTop: 8,
  },
  buttonContent: {
    height: 48,
  },
})


