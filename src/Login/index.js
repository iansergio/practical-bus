import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.centralizarImage}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
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
                        onPress={() => navigation.navigate('Cadastro')}>
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

    },
    logo: {
        marginTop: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 325,
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#F4F3F4',
        borderRadius: 21,
        borderColor: '#E0E0E0',
        marginBottom: 25,
        padding: 12,
        fontSize: 19,
    },
    input2: {
        borderColor: '#0077B6',
        borderStyle: 'solid',
        borderWidth: 3,
        width: 362,
        height: 380,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 16,
        marginBottom: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: '#FFC300'
    },

    input3: {
        marginTop: 20,
    },
    loginButton: {
        marginTop: 80,
        marginLeft: 30,
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    loginText: {
        color: '#FFC300',
        fontSize: 20,
    },
    imagemFundo: {
        flex: 1,
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
        marginLeft: 8
    },

});

