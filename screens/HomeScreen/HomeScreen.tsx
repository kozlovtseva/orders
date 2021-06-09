import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { IOrdersGroupedListItem } from '../../interfaces/orders';
import ordersStore from '../../store/OrdersStore';
import { OrdersItem } from './components';
import GroupTitle from '../../components/Title/GroupTitle';
import { ITheme } from '../../interfaces/theme';
import { ThemeContext } from '../../App';

interface IStore {
    list: IOrdersGroupedListItem[];
}
interface IProps {
    orders: IStore;
}

const HomeScreen: FC<IProps> = ({ orders }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    useEffect(() => {
        ordersStore.init();
    }, []);

    return (
        <View style={{ backgroundColor: theme.colors.primary, flex: 1, padding: 10 }}>
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
