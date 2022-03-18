import React from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Linking } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.centralizarImage}>
                    <Image
                        source={require('../assets/bus.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.input2}>
                    <View style={styles.input3}>
                        <TextInput style={styles.input}
                            placeholder='*Usuário'
                        />
                        <TextInput style={styles.input}
                            placeholder='*Senha'
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Text style={styles.TextCadastro1}>
                        Não tem cadastro?
                    </Text>
                    <Text
                        style={styles.link}
                        onPress={() => {
                            Linking.openURL('https://techup.co.in');
                        }}>
                        CADASTRE-SE
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${"Imagebk"})`
    },
    logo: {
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',

        height: '200px',
        width: '325px',
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#F4F3F4',
        borderRadius: 21,
        borderWidht: 1,
        borderColor: '#E0E0E0',
        marginBottom: 25,
        padding: 12,
        fontSize: 19,
        fontFamily: '../assets/font/Cagliostro-Regular'
    },
    input2: {
        borderColor: '#0077B6',
        borderStyle: 'solid',
        borderWidth: '3px',
        width: '380px',
        paddingTop: '10px',
        paddingBottom: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '16px',
        marginBottom: '100px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: '20px',
        backgroundColor: '#FFC300'
    },

    input3: {
        marginTop: '100px',
    },
    loginButton: {
        marginTop: '100px',
        backgroundColor: 'white',
        width: '100%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    loginText: {
        color: '#FFC300',
        fontSize: 15,
    },
    imagemFundo: {
        flex: '1',
        resizeMode: 'cover',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    centralizarImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextCadastro1: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        color: '#FFFFFF',
    },
    link: {
        color: '#FFC300',
        marginLeft: '10px'
    },

});

