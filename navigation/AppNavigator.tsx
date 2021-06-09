import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen, HomeScreen } from '../screens';
import { ITheme } from '../interfaces/theme';
import { ThemeContext } from '../App';

export type RootStackParamList = {
    'Мои заказы': undefined;
    Details: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = (): React.ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Мои заказы">
                <Stack.Screen
                    name="Мои заказы"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: theme.colors.primary,
                        },
                        headerTintColor: theme.colors.title,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: theme.colors.primary,
                        },
                        headerTintColor: theme.colors.title,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
