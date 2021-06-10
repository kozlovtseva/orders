import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

import { ITheme } from '../../../interfaces/theme';
import { ThemeContext } from '../../../App';

interface IProps {
    title: string;
    text: string;
}

const DetailItem: FC<IProps> = ({ title, text }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={[styles.title, { color: theme.colors.lightText }]}>{title}</Text>
            <Text style={[styles.text, { color: theme.colors.text }]}>{text}</Text>
        </View>
    );
};

type Style = {
    title: TextStyle;
    text: TextStyle;
};

const styles = StyleSheet.create<Style>({
    title: {
        fontSize: 14,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
    },
});

export default DetailItem;
