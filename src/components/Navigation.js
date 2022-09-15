import Home from '../pages/Home';
import { RecipeScreenNavigator } from './NestedNavigation';
import RecipePage from '../pages/RecipePage';
import ShoppingList from '../pages/ShoppingList';
import Settings from '../pages/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#fdf6da',
                    tabBarInactiveTintColor: '#3d3d3d',
                    tabBarStyle: {
                        backgroundColor: '#e58637',
                        paddingTop: 0,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Search Page') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'Recipe Page') {
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                        } else if (route.name === 'Shopping List') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search Page" component={RecipeScreenNavigator} />
                <Tab.Screen name="Recipe Page" component={RecipePage} />
                <Tab.Screen name="Shopping List" component={ShoppingList} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}