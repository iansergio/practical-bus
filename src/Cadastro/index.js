import React from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.background}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
                <View style={styles.borda}>

                    <TextInput style={styles.input}
                        placeholder='*Nome'
                    />

                    <TextInput style={styles.input}
                        placeholder='*Email'
                    />

                    <TextInput style={styles.input}
                        placeholder='*Senha'
                    />

                    <TextInput style={styles.input}
                        placeholder='*Confirmar Senha'
                    />

                    <TouchableOpacity style={styles.confButton}>
                        <Text style={styles.confText}>Cadastrar</Text>
                    </TouchableOpacity>
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
    logo: {
        flex: 1,
        marginTop: '15%',
        marginLeft: 47,
        width: 325,
        height: 200,
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
    confButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 60,
        marginTop: '10%',
        marginLeft: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
    },
    confText: {
        justifyContent: 'center',
        color: '#FFC300',
        fontSize: 30,
    },
    borda: {
        width: '80%',
        height: 500,
        borderColor: '#FFF',
        borderWidth: 3,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
        marginBottom: '100%',
        marginTop: '%',
        marginLeft: '10%',
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
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
    },
});
