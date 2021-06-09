import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { ThemeContext } from '../../App';
import { ITheme } from '../../interfaces/theme';

interface IProps {
    title: string;
}

const GroupTitle: FC<IProps> = ({ title }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return <Text style={[styles.title, { color: theme.colors.title }]}>{title}</Text>;
};

type Style = {
    title: TextStyle;
};

const styles = StyleSheet.create<Style>({
    title: {
        fontSize: 14,
    },
});

export default GroupTitle;
