import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInPage } from './src/pages/sign-in';
import { SignUpPage } from './src/pages/sign-up';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
        }}
      >
        <Stack.Screen name="SignIn" component={SignInPage} options={{ title: "Nutrinfor" }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ title: "Cadastro" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
