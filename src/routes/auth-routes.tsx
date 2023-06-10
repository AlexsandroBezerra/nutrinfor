import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../screens/sign-in';
import { SignUpScreen } from '../screens/sign-up';

const Stack = createNativeStackNavigator();

const HEADER_BACKGROUND_COLOR = '#897A5F';

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#FFFFFF",
          headerStyle: { backgroundColor: HEADER_BACKGROUND_COLOR },
          headerTitleStyle: { fontWeight: "bold" }
        }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Nutrinfor" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Cadastro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
