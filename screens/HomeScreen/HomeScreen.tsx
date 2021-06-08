import React, { FC, ReactElement, useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/AppNavigator';
import { IOrdersListItem } from '../../interfaces/orders';
import ordersStore from '../../store/OrdersStore';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Мои заказы'>;

interface IStore {
    list: IOrdersListItem[];
}
interface IProps {
    orders: IStore;
}

const HomeScreen: FC<IProps> = ({ orders }): ReactElement => {
    const navigation = useNavigation<HomeScreenProp>();

    useEffect(() => {
        ordersStore.init();
    }, []);

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: '1' })}>
                <Text>Details</Text>
            </TouchableOpacity>
            {orders.list.length > 0 ? <Text>list</Text> : <ActivityIndicator size="large" />}
        </View>
    );
};

export default inject('orders')(observer(HomeScreen));
