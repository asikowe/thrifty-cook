import ShoppingList from '../pages/ShoppingList';
import Searching from '../pages/SearchPage';
import Home from '../pages/Home';
import { RecipeScreenNavigator } from './NestedNavigation';
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
                    tabBarStyle: {
                        backgroundColor: 'black',
                        paddingTop: 0,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home' : 'home-outline';
                        } else if (route.name === 'Search Page') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'Shopping List') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } 

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FDF6DA',
                    tabBarInactiveTintColor: 'gray',

                })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search Page" component={RecipeScreenNavigator} />
                <Tab.Screen name="Shopping List" component={ShoppingList} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}