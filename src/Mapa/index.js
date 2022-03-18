import React from "react";
import Iframe from "react-iframe";
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

export default function Mp() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/backgroundmenu.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.mapatitu}>MAPA</Text>
                <View style={styles.mapa}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57206.26359228328!2d-48.82921286640014!3d-26.346197296536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20onibus!5e0!3m2!1spt-BR!2sbr!4v1646414915689!5m2!1spt-BR!2sbr" width="100%" height="400" style="border:0" loading="lazy"/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo1: {
        width: 300,
        height: 300,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mapa: {
        marginTop: 200,
        width: 500,
        height: 600,
    },
    mapatitu: {
        fontSize: 30,
        color: '#0077B6',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
});
