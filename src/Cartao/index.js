import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";

export default function Ct({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/backgroundcart.png')} resizeMode="cover" style={styles.image} />
      <Image source={require("../../assets/icon.png")} />
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ color: "#FFC300", fontSize: 40 }}>Cartão Practial</Text>
        <Text
          style={{ color: "#FFC300", fontSize: 20, fontFamily: "sans-serif" }}
        >
          Aproxime o cartão do sensor
        </Text>
      </View>
      <View style={styles.border}>
        <Image source={require("../../assets/card.png")} />
      </View>
      <View style={{ top: 0 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={{ backgroundColor: "#FFC300", borderRadius: 20, padding: 7 }}
        >
          <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Voltar</Text>
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
    width: '100%'
  },
  border: {
    borderStyle: "solid",
    padding: 70,
    borderRadius: 10,
    borderColor: "#12239E",
    borderWidth: 2,
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
    flex: 1
  }
});
