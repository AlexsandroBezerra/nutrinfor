import { useRef, useState } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  ActivityIndicator,
  Image
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import { FirebaseService } from '../../services/firebase';
import { Input } from '../../components/input';

import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';

export function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const passwordInputRef = useRef<TextInput>()

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
      <Image
        source={require('../../../assets/icon.png')}
        style={{
          height: 120,
          width: 120,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginBottom: 64,
          marginTop: -64
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
        enablesReturnKeyAutomatically
        onSubmitEditing={() => {
          passwordInputRef?.current.focus()
        }}
      />

      <Input
        style={styles.textInput}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        textContentType='password'
        returnKeyType='send'
        enablesReturnKeyAutomatically
        onSubmitEditing={() => signIn()}
        ref={passwordInputRef}
      />

      <RectButton
        style={styles.signIn}
        onPress={signIn}
      >
        <Text style={{
          color: 'white',
          fontFamily: "sans-serif-medium",
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          Logar
        </Text>
      </RectButton>

      <Text style={styles.signUpText}>Não tem conta?</Text>
      <Text
        style={styles.signUpLink}
        onPress={() => navigation.navigate('SignUp')}
      >
         Clique aqui para cadastrar!
      </Text>

      <StatusBar style='light' />
    </View>
  )
}
