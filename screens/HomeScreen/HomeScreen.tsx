import React, { FC, ReactElement } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { inject, observer } from 'mobx-react';
import { IOrdersListItem } from '../../interfaces/orders';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Мои заказы'>;

interface IStore {
    list: IOrdersListItem[];
}
interface IProps {
    ordersStore: IStore;
}

const HomeScreen: FC<IProps> = ({ ordersStore }): ReactElement => {
    const navigation = useNavigation<HomeScreenProp>();

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: '1' })}>
                <Text>Details</Text>
            </TouchableOpacity>
            {ordersStore.list.length > 0 ? <Text>list</Text> : <ActivityIndicator size="large" />}
        </View>
    );
};

export default inject('ordersStore')(observer(HomeScreen));
