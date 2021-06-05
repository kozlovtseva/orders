import React, { FC, ReactElement } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({ route }): ReactElement => {
    return (
        <View>
            <Text>DetailsScreen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
};

export default DetailsScreen;
