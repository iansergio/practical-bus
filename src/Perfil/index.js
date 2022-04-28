import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Axios from 'axios';
import Constants from "expo-constants";


import * as ImagePicker from 'expo-image-picker';
import { auto } from "async";


export default function Upload() {
    const [avatar, setAvatar] = useState();

    async function ImagePickerCall() {
        if (Constants.platform.ios) {

            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== 'granted') {
                alert("nós precisamos dessa permissão");
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All
        });

        if (data.cancelled) {
            return;
        }

        if (!data.uri) {
            return;
        }
        setAvatar(data);
    }

    async function uploadImage() {
        const data = new FormData();
        data.append('avatar', {
            fileName: avatar.fileName,
            uri: avatar.uri,
            type: avatar.type,
        });
        await Axios.post('http://localhost:3333/files', data);
    }

    return (
        <View style={styles.container}>
          
            <View style={styles.borda}>
            <Image source={{
                uri: avatar
                    ? avatar.uri
                    : 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
            }}
                style={styles.avatar}
            >
            </Image>
            <TouchableOpacity style={styles.button} onPress={ImagePickerCall}>
                <Text>Escolher imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={uploadImage}>
                <Text>Enviar imagem </Text>
            </TouchableOpacity>
    
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#0077B6',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#FFC300',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    buttonText: {
        color: '#FFF',
        marginBottom: '20%',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 40,
        marginLeft:"auto",
        marginRight:"auto"
    },
    borda: {
        borderColor: '#FFC300',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: 80,
        marginBottom:100,
    }
});