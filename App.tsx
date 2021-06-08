import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'mobx-react';
import AppNavigator from './navigation/AppNavigator';
import ordersStore from './store/OrdersStore';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider orders={ordersStore}>
                <AppNavigator />
            </Provider>
        );
    }
}
