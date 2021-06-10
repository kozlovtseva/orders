import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen, HomeScreen } from '../screens';
import { ITheme } from '../interfaces/theme';
import { ThemeContext } from '../App';

export type RootStackParamList = {
    Home: undefined;
    Details: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = (): React.ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: theme.colors.primary,
                        },
                        headerTintColor: theme.colors.title,
                        headerTitle: 'Мои заказы',
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
