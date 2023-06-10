import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { FoodContextProvider } from '../contexts/foods-context';
import { ConsultsScreen } from '../screens/consults';
import { ProfileScreen } from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <FoodContextProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Consults">
          <Tab.Screen
            name="Consults"
            component={ConsultsScreen}
            options={{
              title: "Consultas",
              tabBarActiveTintColor: '#897A5F',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#897A5F',
              },
              tabBarIcon: ({ focused, color, size }) => {
                return <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />
              }
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Perfil",
              tabBarActiveTintColor: '#897A5F',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#897A5F',
              },
              tabBarIcon: ({ focused, color, size }) => {
                return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FoodContextProvider>
  );
}
