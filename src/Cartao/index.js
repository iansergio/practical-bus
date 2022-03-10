import React from 'react';
import { Text, View, Button } from 'react-native';
import Mn from '../Menu';

export default function Ct({ navigation }) {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('Menu')}
                title="cartao"
            />
        </View >
    );
}