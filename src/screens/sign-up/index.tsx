import { useRef, useState } from 'react'
import {
  View,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native'

import { styles } from './styles'
import { FirebaseService } from '../../services/firebase'
import { StatusBar } from 'expo-status-bar'
import { Input } from '../../components/input'
import { RectButton, TextInput } from 'react-native-gesture-handler'

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailInputRef = useRef<TextInput>()
  const passwordInputRef = useRef<TextInput>()

  async function signUp() {
    if (email === '' && password === '') {
      Alert.alert("Insira dados corretamente!");
    } else {
      try {
        setIsLoading(true);
        await FirebaseService.signUp(name, email, password)
        setIsLoading(false);
        navigation.navigate('SignIn');
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    }
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Input
        style={styles.textInput}
        placeholder="Nome Completo"
        value={name}
        onChangeText={(text) => setName(text)}
        textContentType='name'
        returnKeyType='next'
        onSubmitEditing={() => {
          emailInputRef?.current.focus()
        }}
      />

      <Input
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        textContentType='emailAddress'
        returnKeyType='next'
        ref={emailInputRef}
        onSubmitEditing={() => {
          passwordInputRef?.current.focus()
        }}
      />

      <Input
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        textContentType='password'
        returnKeyType='send'
        enablesReturnKeyAutomatically
        onSubmitEditing={() => signUp()}
        ref={passwordInputRef}
      />

      <RectButton
        style={styles.signUp}
        onPress={signUp}
      >
        <Text style={{
          color: 'white',
          fontFamily: "sans-serif-medium",
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          Cadastro
        </Text>
      </RectButton>

      <Text style={styles.signInText}>
        Já está cadastrado?
      </Text>
      <Text style={styles.signInLink}
        onPress={() => navigation.navigate('SignIn')}>
        Clique aqui para fazer login!
      </Text>

      <StatusBar style='light' />
    </View>
  );
}
