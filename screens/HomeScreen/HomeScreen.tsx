import React, { FC, ReactElement, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { useTheme } from '@react-navigation/native';

import { IOrdersGroupedListItem } from '../../interfaces/orders';
import ordersStore from '../../store/OrdersStore';
import { OrdersItem } from './components';
import GroupTitle from '../../components/Title/GroupTitle';

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
                    <View key={index} style={{ marginBottom: 20 }}>
                        <GroupTitle title={group.title} />
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
