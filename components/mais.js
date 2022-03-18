import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Mais() {
    return (
        <View>
            <Text style={styles.box}>Mostrar Mais</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    box: {
        fontSize: 27,
        textAlign: 'center',
        borderStyle: 'solid',
        borderBottomColor: '#FFC300',
        borderEndColor: '#FFC300',
        borderStartColor: '#FFC300',
        borderTopColor: '#FFC300',
        borderRadius: 22,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300,
        color: 'white',
        backgroundColor: '#FFC300',

        // textAlign: 'center',
        // backgroundColor: '#FFC300',
        // borderRadius: 20,
        // height: 4,
        // width: 360,
        // padding: 20,
        // paddingStart: 20,
        // marginLeft: 'auto',
        // marginRight:'auto',
        // fontSize: 18,
        //border: 'solid',
        //borderColor: '#FFC300',
    }

});