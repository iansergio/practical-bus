import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Text1 from '../../components/box';
import Input from '../../components/input';
import Input2 from '../../components/input2';

export default function Iti({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.fontTest}>Horários e Intinerários</Text>
      <Text style={styles.font2}>Terminal Central</Text>
      <Text style={styles.font3}>Terminal de Integração</Text>

      <Text1 />
      <Input2 />

      <Text1 />
      <Input />

      <Text1 />
      <Input />

      <Text1 />
      <Input2 />

      <Text1 />
      <Input />

      <View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={{ width: 120, height: 50, backgroundColor: "#FFC300", borderRadius: 25, padding: 7, marginLeft: "auto", marginRight: "auto", marginTop: 2 }}
        >
          <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 20, color: "#FFFFFF" }}>Voltar</Text>
        </TouchableOpacity>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077B6',
  },
  fontTest: {
    color: 'yellow',
    backgroundColor: '#FFC300',
    fontSize: 35,
    color: '#0077B6',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  font2: {
    lineHeight: 45,
    color: '#FFC300',
    fontSize: 20,
    margin: 3,
  },
  font3: {
    lineHeight: 20,
    color: '#FFC300',
    fontSize: 20,
    margin: 3,
  },
  container2: {
    justifyContent: 'center',
  },
  font4: {
    padding: 20,
    fontSize: 10,
  }

});
