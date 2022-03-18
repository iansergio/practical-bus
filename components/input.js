import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Input = () => {
  const [text, onChangeText] = React.useState("Horário chegada: 14:40");
  const [number, onChangeNumber] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Horário saída: 14:45"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 5,
    //borderWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    lineHeight: 20,
  },
});

export default Input