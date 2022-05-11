import React from 'react';
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
        marginTop: '12%',
        margin:'auto',
        marginLeft: 'auto',
        marginRight:'auto',
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
    confButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        marginTop: '10%',
        marginLeft: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
    },
    confText: {
        justifyContent: 'center',
        color: '#FFC300',
        fontSize: 25,
    },
    borda: {
        width: '80%',
        height: 500,
        borderColor: '#0077B6',
        borderWidth: 3,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginBottom: '20%',
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
