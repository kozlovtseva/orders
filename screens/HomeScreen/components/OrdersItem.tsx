import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../navigation/AppNavigator';
import { IStatusList, IStatusListItem } from '../../../interfaces/orders';
import { ITheme } from '../../../interfaces/theme';
import { ThemeContext } from '../../../App';
import OrdersLabel from '../../../components/Label/OrdersLabel';

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

    const getStatus = (status: string): IStatusListItem => {
        const statusList: IStatusList = {
            canceled: {
                name: 'отменен',
                color: '#EF6366',
            },
            done: {
                name: 'приготовлен',
                color: '#23DCAD',
            },
            sent_to_kitchen: {
                name: 'отправлено на кухню',
                color: '#FDA53C',
            },
            new: {
                name: 'новый',
                color: '#E173D6',
            },
        };
        return statusList[status.toLowerCase()]
            ? statusList[status.toLowerCase()]
            : {
                  name: '',
                  color: '',
              };
    };
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.card,
                },
            ]}
            onPress={() => navigation.navigate('Details', { id: '1' })}
        >
            <View style={{ opacity: item.status === 'CANCELED' ? 0.5 : 1 }}>
                <Text style={[styles.time, { color: theme.colors.text }]}>
                    {getTime(new Date(item.creationDate))}
                </Text>
                <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.address, { color: theme.colors.lightText }]}>
                    {item.address}
                </Text>
                <OrdersLabel
                    name={getStatus(item.status).name}
                    color={getStatus(item.status).color}
                />
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
