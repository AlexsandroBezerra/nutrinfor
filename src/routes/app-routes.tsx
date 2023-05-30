import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { FoodContextProvider } from '../contexts/foods-context';
import { ConsultsScreen } from '../screens/consults';
import { HomeScreen } from '../screens/home';
import { ProfileScreen } from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <FoodContextProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Refeições">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Refeições",
              tabBarIcon: ({ focused, color, size }) => {
                return <Ionicons name={focused ? 'fast-food' : 'fast-food-outline'} color={color} size={size} />
              }
            }}
          />
          <Tab.Screen
            name="Consults"
            component={ConsultsScreen}
            options={{
              title: "Consultas",
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
