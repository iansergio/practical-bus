import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, Platform, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

export default function Mp({navigation}) {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para o acesso a localização negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Aguarde...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/backgroundmenu.png')} resizeMode="cover" style={styles.image}>

                <WebView style={styles.mapa}
                    scalesPageToFit={true}
                    bounces={false}
                    source={{
                        html: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d323457.2166266419!2d-48.78509218984567!3d-26.399873287256764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20onibus%20joinville!5e0!3m2!1spt-BR!2sbr!4v1651515669484!5m2!1spt-BR!2sbr" width="2000" height="2000" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,


                    }}

                />


                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                    style={{ width: 120, height: 50, backgroundColor: "#FFC300", borderRadius: 25, padding: 7, marginLeft: "auto", marginRight: "auto", marginBottom:20 }}
                >
                    <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 20, color: "#FFFFFF" }}>Voltar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0077B6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    logo1: {
        width: 300,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
    },
    mapa: {
        marginTop: 200,
        width: 400,
        maxHeight: 450,
        marginLeft: "auto",
        marginRight: "auto"

    },
    mapatitu: {
        fontSize: 30,
        color: '#0077B6',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    paragraph: {
        fontSize: 15,
        textAlign: 'center',
    },
});
