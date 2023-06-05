import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../screens/sign-in';
import { SignUpScreen } from '../screens/sign-up';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Nutrinfor", headerStyle: {
            backgroundColor: '#897a5f',
          }}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Cadastro", headerStyle: {
            backgroundColor: '#897a5f',
          }}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
