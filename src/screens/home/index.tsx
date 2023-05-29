import { StatusBar } from 'expo-status-bar';
import { signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';

import { firebaseAppAuth } from '../../firebase';
import { useAuthentication } from '../../hooks/use-authentication';

import { styles } from './styles';

export function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Olá, {user?.displayName}!</Text>
      <Button
        color="#3740FE"
        title="Sair"
        onPress={() => signOut(firebaseAppAuth)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
