import Home from '../pages/HomePage';
import RecipeScreenNavigator from './RecipeScreenNavigator';
import RecipeScreenNavigator2 from './RecipeScreenNavigatorStarred';
import ShoppingList from '../pages/ShoppingListPage';
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
                    tabBarLabelStyle: { fontSize: 14, fontFamily: 'PoppinsRegular' },
                    tabBarActiveTintColor: '#fdf6da',
                    tabBarInactiveTintColor: '#3d3d3d',
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        borderTopColor: 'transparent',
                        backgroundColor: '#e58637',
                        height: 60,
                        paddingBottom: 5,
                        paddingTop: 5,
                        paddingHorizontal: 15
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'List') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (route.name === 'Starred') {
                            iconName = focused ? 'star' : 'star-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name='Home' options={{ tabBarLabel: 'Home' }} component={Home} />
                <Tab.Screen name='Search' options={{ tabBarLabel: 'Search' }} component={RecipeScreenNavigator} />
                <Tab.Screen name='List' options={{ tabBarLabel: 'List' }} component={ShoppingList} />
                <Tab.Screen name='Starred' options={{ tabBarLabel: 'Starred' }} component={RecipeScreenNavigator2} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}