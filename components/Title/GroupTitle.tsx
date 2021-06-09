import React, { FC, ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface IProps {
    title: string;
}

const GroupTitle: FC<IProps> = ({ title }): ReactElement => {
    const { colors } = useTheme();

    return <Text style={[styles.title, { color: colors.text }]}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
    },
});

export default GroupTitle;
