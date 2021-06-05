import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import { DetailsScreen } from '../screens/HomeScreen/components';

export type RootStackParamList = {
    'Мои заказы': undefined;
    Details: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = (): React.ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Мои заказы">
                <Stack.Screen name="Мои заказы" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
