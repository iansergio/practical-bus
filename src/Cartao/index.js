import { auto } from "async";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";

export default function Ct({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/cartaoooo.png')} resizeMode="cover" style={styles.Image}>
      
      <View style={{ marginTop:150 }}>
        <Text style={{ color: "#FFC300", fontSize: 40, textAlign:"center" }}>Cartão Practical</Text>
        <Text
          style={{ color: "#FFC300", fontSize: 20, fontFamily: "sans-serif", textAlign:"center" }}
        >
          Aproxime o cartão do sensor
        </Text>
      </View>
      <View style={styles.border}>
        <Image source={require("../../assets/card.png")} />
      </View>
      <View style={{ top: 0, padding:20,}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={{ width: 120, height: 50, backgroundColor: "#FFC300", borderRadius: 25, padding: 7, margin:"auto" }}
        >
          <Text style={{marginTop: 5 , marginLeft: 20, fontSize: 20, color: "#FFFFFF" }}>Voltar</Text>
        </TouchableOpacity>
        
      </View>
      </ImageBackground>
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#0077B6',
    
  },
  border: {
    borderStyle: "solid",
    padding: 60,
    borderRadius: 10,
    borderColor: "#12239E",
    borderWidth: 2,
    width:300,
    height:300,
    margin: "auto",
    
  },
  color1: {
    color: "#FFFFFF",
  },
  link: {
    color: "#FFC300",
  },

  Image:{
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
  }
 
});
