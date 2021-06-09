import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../navigation/AppNavigator';
import { IStatusList } from '../../../interfaces/orders';
import { ITheme } from '../../../interfaces/theme';
import { ThemeContext } from '../../../App';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Мои заказы'>;

interface IProps {
    item: any;
}

const OrdersItem: FC<IProps> = ({ item }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    const navigation = useNavigation<HomeScreenProp>();

    const getTime = (date: Date): string => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        return time;
    };

    const getStatus = (status: string): string => {
        const statusList: IStatusList = {
            canceled: 'отменен',
            done: 'приготовлен',
            sent_to_kitchen: 'отправлено на кухню',
            new: 'новый',
        };
        return statusList[status.toLowerCase()] ? statusList[status.toLowerCase()] : '';
    };

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: theme.colors.card }]}
            onPress={() => navigation.navigate('Details', { id: '1' })}
        >
            <Text style={[styles.time, { color: theme.colors.text }]}>
                {getTime(new Date(item.creationDate))}
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
            <Text style={[styles.address, { color: theme.colors.lightText }]}>{item.address}</Text>

            <Text>{getStatus(item.status)}</Text>
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
        right: 12,
        top: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    address: {
        fontSize: 14,
        fontWeight: '400',
    },
});

export default OrdersItem;
