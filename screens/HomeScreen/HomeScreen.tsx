import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { IOrdersGroupedListItem } from '../../interfaces/orders';
import ordersStore, { IStore } from '../../store/OrdersStore';
import { OrdersItem } from './components';
import GroupTitle from '../../components/Title/GroupTitle';
import { ITheme } from '../../interfaces/theme';
import { ThemeContext } from '../../App';

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
            {orders.groupedList.length > 0 ? (
                <FlatList
                    data={orders.groupedList}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 20 }}>
                            <GroupTitle title={item.title} />
                            <FlatList
                                data={item.data}
                                renderItem={({ item }) => <OrdersItem item={item} />}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={false}
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <ActivityIndicator size="large" color="#ffffff" />
            )}
        </View>
    );
};

export default inject('orders')(observer(HomeScreen));
