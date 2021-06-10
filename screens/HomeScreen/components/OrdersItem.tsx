import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../navigation/AppNavigator';
import { IOrdersListItem, IStatusList, IStatusListItem } from '../../../interfaces/orders';
import { ITheme } from '../../../interfaces/theme';
import { ThemeContext } from '../../../App';
import OrdersLabel from '../../../components/Label/OrdersLabel';
import { getTime } from '../../../utils/date';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

interface IProps {
    item: IOrdersListItem;
}

const OrdersItem: FC<IProps> = ({ item }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.card,
                },
            ]}
            onPress={() => navigation.navigate('Details', { id: item.id })}
        >
            <View style={{ opacity: item.status === 'CANCELED' ? 0.5 : 1 }}>
                <Text style={[styles.time, { color: theme.colors.text }]}>
                    {getTime(new Date(item.creationDate))}
                </Text>
                <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.address, { color: theme.colors.lightText }]}>
                    {item.address}
                </Text>
                <OrdersLabel status={item.status} />
            </View>
        </TouchableOpacity>
    );
};

type Style = {
    container: ViewStyle;
    time: TextStyle;
    title: TextStyle;
    address: TextStyle;
};

const styles = StyleSheet.create<Style>({
    container: {
        borderRadius: 5,
        marginTop: 8,
        paddingHorizontal: 13,
        paddingVertical: 15,
        position: 'relative',
    },
    time: {
        fontSize: 14,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    address: {
        fontSize: 14,
        fontWeight: '400',
        marginVertical: 5,
    },
});

export default OrdersItem;
