import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

import { useAuthentication } from '../../hooks/use-authentication';
import { FirebaseService } from '../../services/firebase';

import { styles } from './styles';

export function ProfileScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {user?.displayName}!</Text>

      <Button
        color="#3740FE"
        title="Sair"
        onPress={() => FirebaseService.signOut()}
      />

      <StatusBar style="auto" />
    </View>
  );
}
