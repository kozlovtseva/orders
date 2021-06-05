import React, { FC, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Мои заказы'>;

const HomeScreen: FC<{}> = ({}): ReactElement => {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: '1' })}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
