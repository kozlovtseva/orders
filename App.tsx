import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'mobx-react';

import { theme } from './theme';
import AppNavigator from './navigation/AppNavigator';
import ordersStore from './store/OrdersStore';

export const ThemeContext = React.createContext({});

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider orders={ordersStore}>
                <ThemeContext.Provider value={theme}>
                    <AppNavigator />
                </ThemeContext.Provider>
            </Provider>
        );
    }
}
