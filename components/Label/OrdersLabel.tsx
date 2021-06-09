import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../../App';
import { ITheme } from '../../interfaces/theme';

interface IProps {
    name: string;
    color: string;
}

const OrdersLabel: FC<IProps> = ({ name, color }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: color ? color : theme.colors.primary }]}>
            <Text style={[styles.text, { color: theme.colors.title }]}>{name.toUpperCase()}</Text>
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
