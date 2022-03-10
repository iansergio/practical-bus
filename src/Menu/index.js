import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';

export default function Mn({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/backgroundmenu.png')} resizeMode="cover" style={styles.background}>
                <View>
                    <Image style={styles.logo}
                        source={require('../../assets/kisspng-bus-car-icon.png')}
                    />
                </View>
                <View style={styles.borda}>
                    <Pressable style={styles.confButton} onPress={() => navigation.navigate('Cartao')}>
                        <Text style={styles.confText}>Cartão</Text>
                    </Pressable>
                    <Pressable style={styles.confButton} onPress={() => navigation.navigate('Comprar')}>
                        <Text style={styles.confText}>Comprar Passe</Text>
                    </Pressable>
                    <Pressable style={styles.confButton} onPress={() => navigation.navigate('Horarios')}>
                        <Text style={styles.confText}>Horários e Itinerários</Text>
                    </Pressable>
                    <Pressable style={styles.confButton} onPress={() => navigation.navigate('Mapa')}>
                        <Text style={styles.confText}>Mapa</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
    },
    confButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        paddingHorizontal: 32,
        borderRadius: 19,
        backgroundColor: 'white',
        marginTop: '8%'
    },
    confText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#0077B6',
    },
    logo: {
        width: 250,
        height: 200,
        marginLeft: '17%',
        marginTop: '72%',
        paddingTop: '5%',
        paddingBottom: '20%',
    },
    borda: {
        width: '75%',
        height: 360,
        borderColor: '#fff',
        borderWidth: 3,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
        marginBottom: '100%',
        marginLeft: '12.5%',

        borderRadius: 20,
        backgroundColor: '#FFC300',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});