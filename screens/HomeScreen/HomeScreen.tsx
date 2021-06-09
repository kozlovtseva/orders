import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SectionList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { useTheme } from '@react-navigation/native';

import { IOrdersGroupedListItem, IOrdersListItem } from '../../interfaces/orders';
import ordersStore from '../../store/OrdersStore';
import { OrdersItem } from './components';

interface IStore {
    list: IOrdersGroupedListItem[];
}
interface IProps {
    orders: IStore;
}

const HomeScreen: FC<IProps> = ({ orders }): ReactElement => {
    const { colors } = useTheme();

    useEffect(() => {
        ordersStore.init();
    }, []);

    return (
        <View style={{ backgroundColor: colors.primary, flex: 1, padding: 5 }}>
            {orders.list.length > 0 ? (
                orders.list.map((group: IOrdersGroupedListItem, index: number) => (
                    <View key={index}>
                        <Text>{group.title}</Text>
                        <FlatList
                            data={group.data}
                            renderItem={({ item }) => <OrdersItem item={item} />}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                ))
            ) : (
                <ActivityIndicator size="large" color="#ffffff" />
            )}
        </View>
    );
};

export default inject('orders')(observer(HomeScreen));
