import React, { FC, ReactElement, useContext } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ITheme } from '../../../interfaces/theme';
import { ThemeContext } from '../../../App';
import { IGuest } from '../../../interfaces/orders';

interface IProps {
    guest: IGuest;
}

const Guest: FC<IProps> = ({ guest }): ReactElement => {
    const theme: ITheme = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.wrapper}>
            <View style={styles.container}>
                <LinearGradient colors={['#CFB9EE', '#B2C3EE']} style={styles.avatar}>
                    <Text style={[styles.letter, { color: theme.colors.card }]}>
                        {guest.firstName[0]}
                    </Text>
                </LinearGradient>
                <View>
                    <Text style={[styles.name, { color: theme.colors.text }]}>
                        {guest.firstName}
                    </Text>
                    <Text style={[styles.phone, { color: theme.colors.lightText }]}>
                        {guest.phone}
                    </Text>
                </View>
            </View>

            <View style={styles.button}>
                <Icon name="call" size={30} color="#ffffff" />
            </View>
        </TouchableOpacity>
    );
};

type Style = {
    wrapper: ViewStyle;
    container: ViewStyle;
    name: TextStyle;
    phone: TextStyle;
    avatar: ViewStyle;
    letter: TextStyle;
    button: ViewStyle;
};

const styles = StyleSheet.create<Style>({
    wrapper: {
        backgroundColor: '#E4E7EA',
        borderRadius: 7,
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    name: {
        fontSize: 14,
    },
    phone: {
        fontSize: 12,
    },
    avatar: {
        alignItems: 'center',
        borderRadius: 35,
        height: 35,
        justifyContent: 'center',
        marginRight: 12,
        width: 35,
    },
    letter: {
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#54D5B4',
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        justifyContent: 'center',
        marginLeft: 'auto',
        width: 56,
    },
});

export default Guest;
