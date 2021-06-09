import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen, HomeScreen } from '../screens';

export type RootStackParamList = {
    'Мои заказы': undefined;
    Details: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#006FC3',
        text: '#ffffff',
    },
};

const AppNavigator = (): React.ReactElement => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName="Мои заказы">
                <Stack.Screen
                    name="Мои заказы"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: Theme.colors.primary,
                        },
                        headerTintColor: Theme.colors.text,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: Theme.colors.primary,
                        },
                        headerTintColor: Theme.colors.text,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
