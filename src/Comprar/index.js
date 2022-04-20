import React from "react";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text, TextInput } from 'react-native';

export default function Cp() {
    return (
        <View style={styles.container}>
          
            <ImageBackground source={require('../../assets/backgroundmenu.png')} resizeMode="cover" style={styles.image}>
            
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo1}
                    />
                </View>
                <View style={styles.subir}>
                <View style={styles.imageCar}>
                    <Image
                        source={require('../../assets/cartaoo.png')}
                        style={styles.cartao}
                    />
                </View>
                <Text style={styles.textReca}>Quantidade à recarregar</Text>
                <View style={styles.input2}>
                    <TextInput
                        style={styles.input}
                        keyboardType={('numeric')}
                        placeholder="Recarregue aqui"
                        
                    />
                </View>
                <View style={styles.botao}>
                    <TouchableOpacity style={styles.Comprar}>
                        <Text style={styles.Comprar2}>Comprar</Text>
                    </TouchableOpacity>
                </View>
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
        width: '100%',
   
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    cartao: {
        width: 300,
        height: 300,
    },
    imageCar: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo1: {
        width: 300,
        height: 300,
    },
    Comprar: {
        marginTop: 40,
        backgroundColor: '#FFC300',
        width: '50%',
        height: 42,
        borderRadius: 100,
        
    },
    Comprar2: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 5,
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 3,
        borderColor: "#FFC300",
        padding: 10,
    },
    input2: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',

    },
    textReca: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    subir:{
        marginBottom:500,
    }



});
