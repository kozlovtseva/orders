import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../../App';
import { ITheme } from '../../interfaces/theme';
import { IStatusList, IStatusListItem } from '../../interfaces/orders';

interface IProps {
    status: string;
}

const OrdersLabel: FC<IProps> = ({ status }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    const [name, setName] = useState<string>('');
    const [color, setColor] = useState<string>('');

    useEffect(() => getStatus(status), []);

    const getStatus = (status: string) => {
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
        setName(statusList[status.toLowerCase()].name.toUpperCase());
        setColor(statusList[status.toLowerCase()].color);
    };
    return (
        <View style={[styles.container, { backgroundColor: color ? color : theme.colors.primary }]}>
            <Text style={[styles.text, { color: theme.colors.title }]}>{name}</Text>
        </View>
    );
};

type Style = {
    container: ViewStyle;
    text: TextStyle;
};

const styles = StyleSheet.create<Style>({
    container: {
        alignSelf: 'flex-start',
        borderRadius: 3,
        marginTop: 10,
        paddingHorizontal: 7,
        paddingVertical: 4,
    },
    text: {
        fontSize: 10,
        fontWeight: '500',
    },
});

export default OrdersLabel;
