import React, { FC, ReactElement, useEffect } from 'react';
import { ActivityIndicator, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../navigation/AppNavigator';
import { IOrdersGroupedListItem, IOrdersListItem, IStatusList } from '../../../interfaces/orders';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Мои заказы'>;

interface IStore {
    list: IOrdersGroupedListItem[];
}
interface IProps {
    item: any;
}

const OrdersItem: FC<IProps> = ({ item }): ReactElement => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: '1' })}>
            <Text>{getStatus(item.status)}</Text>
            <Text>{item.title}</Text>
            <Text>{item.address}</Text>
            <Text>{getTime(new Date(item.creationDate))}</Text>
        </TouchableOpacity>
    );
};

export default OrdersItem;
