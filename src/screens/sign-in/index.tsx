import { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  ActivityIndicator
} from 'react-native'

import { FirebaseService } from '../../services/firebase';

import { styles } from './styles'

export function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function signIn() {
    if (email === '' && password === '') {
      Alert.alert("Digite suas credenciais!");
    } else {
      try {
        setIsLoading(true);
        await FirebaseService.signIn(email, password)
        setIsLoading(false);
      } catch (e) {
        console.error(e)
        setIsLoading(false);
      }
    }
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        textContentType='emailAddress'
        returnKeyType='next'
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        textContentType='password'
        returnKeyType='send'
        enablesReturnKeyAutomatically
        onSubmitEditing={() => signIn()}
      />

      <Button
        color="#3740FE"
        title="Logar"
        onPress={signIn}
      />

      <Text style={styles.signText}
        onPress={() => navigation.navigate('SignUp')}>
        Não tem conta? Clique aqui para cadastrar!
      </Text>
    </View>
  )
}
