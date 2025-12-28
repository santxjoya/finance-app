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
import { AppLogo } from '../components/AppLogo'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../navigation/AuthStack'
type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>

export default function LoginScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {/* HEADER – NO se mueve */}
    <Appbar.Header style={styles.header} elevated={false}>
      <View style={styles.headerCenter}>
        <AppLogo size={50} />
        <Text style={styles.headerTitle}>Finance-app</Text>
      </View>
    </Appbar.Header>


      {/* CONTENIDO – sí se mueve */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={-110}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Text variant="titleLarge" style={styles.title}>
              Sign In
            </Text>

            <TextInput
              label="Email"
              mode="flat"
              dense
              style={styles.input}
              outlineStyle={styles.outline}
              autoCorrect={false}
              autoCapitalize="none"
            />

            <TextInput
              label="Password"
              mode="flat"
              dense
              style={styles.input}
              secureTextEntry
              returnKeyType="done"
              outlineStyle={styles.outline}
              autoCorrect={false}
              autoCapitalize="none"
            />

            <Button 
              onPress={() => navigation.replace('Home')}
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
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
headerCenter: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
},
headerTitle: {
  fontSize: 15,
  fontWeight: '500',
  marginLeft: 1,
  color: '#1C1C1E',
},
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 180,
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