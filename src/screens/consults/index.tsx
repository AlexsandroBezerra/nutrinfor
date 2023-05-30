import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function ConsultsScreen() {
  return (
    <View style={styles.container}>
      <Text>Consulta</Text>
      <StatusBar style="auto" />
    </View>
  );
}
