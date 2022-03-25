import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Items, Home } from '../screens'; 

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}> 
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Items" component={Items} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes