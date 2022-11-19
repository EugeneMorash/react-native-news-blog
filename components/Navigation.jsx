import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screens/HomeScreen";
import {FullPostScreen} from "../screens/FullPostScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Spaceflight News'}}/>
                <Stack.Screen name='FullPost' component={FullPostScreen} options={{title: 'Article'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}