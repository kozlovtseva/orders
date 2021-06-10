import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react';

import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/AppNavigator';
import { ITheme } from '../../interfaces/theme';
import { ThemeContext } from '../../App';
import { IStore } from '../../store/OrdersStore';
import { IOrdersListItem } from '../../interfaces/orders';
import { getDateWithMonthName, getTime } from '../../utils/date';
import { DetailItem, Guest } from './components';
import OrdersLabel from '../../components/Label/OrdersLabel';

type NavigationProps = StackScreenProps<RootStackParamList, 'Details'>;

interface IProps extends NavigationProps {
    orders: IStore;
}

const DetailsScreen: FC<IProps> = ({ route, orders }): ReactElement => {
    const navigation = useNavigation();
    const theme: ITheme = useContext(ThemeContext);

    const [item, setItem] = useState<IOrdersListItem | null>(null);

    useEffect(() => {
        navigation.setOptions({ title: `Заказ #${route.params.id}` });
        setItemDetails(route.params.id);
    }, []);

    const setItemDetails = (id: number) => {
        const listItem = orders.list.find((x: IOrdersListItem) => x.id === id);
        setItem(listItem ? listItem : null);
    };

    return (
        <View style={[styles.wrapper, { backgroundColor: theme.colors.primary }]}>
            <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
                {item && (
                    <>
                        <View style={styles.label}>
                            <OrdersLabel status={item?.status} />
                        </View>
                        <DetailItem
                            title="Дата создания"
                            text={
                                getDateWithMonthName(new Date(item.creationDate)) +
                                ' ' +
                                getTime(new Date(item.creationDate))
                            }
                        />
                        <DetailItem title="Адрес" text={item.address} />
                        <DetailItem title="Информация для курьера" text={item.courierComment} />
                        <DetailItem title="Заведение" text={item.venue.title} />
                        <Text style={[styles.title, { color: theme.colors.lightText }]}>
                            Клиент
                        </Text>
                        <Guest guest={item.guest} />
                    </>
                )}
            </View>
        </View>
    );
};

type Style = {
    wrapper: ViewStyle;
    container: ViewStyle;
    title: TextStyle;
    label: ViewStyle;
};

const styles = StyleSheet.create<Style>({
    wrapper: {
        flex: 1,
        paddingBottom: 8,
        paddingHorizontal: 8,
        paddingTop: 18,
    },
    container: {
        borderRadius: 5,
        paddingHorizontal: 18,
        paddingVertical: 22,
        position: 'relative',
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
    },
    label: {
        position: 'absolute',
        right: 18,
        top: 15,
    },
});

export default inject('orders')(observer(DetailsScreen));
