import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";

export default function Ct({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/backgroundcart.png')} resizeMode="cover" style={styles.image} />
      
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ color: "#FFC300", fontSize: 40 }}>Cartão Practical</Text>
        <Text
          style={{ color: "#FFC300", fontSize: 20, fontFamily: "sans-serif" }}
        >
          Aproxime o cartão do sensor
        </Text>
      </View>
      <View style={styles.border}>
        <Image source={require("../../assets/card.png")} />
      </View>
      <View style={{ top: 0}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={{ width: 120, height: 50, marginBottom: 20, backgroundColor: "#FFC300", borderRadius: 25, padding: 7 }}
        >
          <Text style={{marginTop: 5 , marginLeft: 20, fontSize: 20, color: "#FFFFFF" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 75
  },
  color1: {
    color: "#FFFFFF",
  },
  link: {
    color: "#FFC300",
  },
  image: {
    width: '100%',
    height: '340%',
    justifyContent: 'center',
    flex: 1,
  }
});
