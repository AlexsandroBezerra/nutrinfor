import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuthentication } from './src/hooks/use-authentication';
import AppRoutes from './src/routes/app-routes';
import AuthRoutes from './src/routes/auth-routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuthentication();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </GestureHandlerRootView>
  )
}
