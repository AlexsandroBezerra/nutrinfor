import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuthentication } from '../../hooks/use-authentication';
import { FirebaseService } from '../../services/firebase';

import { styles } from './styles';

export function ProfileScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, <Text style={{ fontWeight: 'bold' }}>{user?.displayName}</Text>!
      </Text>

      <RectButton
        style={{ backgroundColor: "#897A5F", padding: 16, borderRadius: 8 }}
        onPress={() => FirebaseService.signOut()}
      >
        <Text style={{ fontWeight: '500', color: '#FFFFFF' }}>Sair</Text>
      </RectButton>

      <StatusBar style="light" />
    </View>
  );
}
