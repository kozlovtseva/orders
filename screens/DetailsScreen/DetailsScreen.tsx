import React, { FC, ReactElement, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({ route }): ReactElement => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ title: route.params.id });
    }, []);

    return (
        <View>
            <Text>DetailsScreen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
};

export default DetailsScreen;
