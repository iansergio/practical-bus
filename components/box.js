import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Text1() {
  return (
    <View style={styles.caixa2}>
      <Text style={styles.caixa}>0235</Text>
      <Text style={styles.font}>Tupy/Centro</Text>
      <Text style={styles.font2}>Volta para Centro</Text>
    </View>

  );
}
const styles = StyleSheet.create({
  caixa: {
    color: 'white',
    borderStyle: 'solid',
    borderBottomColor: '#4890FC',
    borderEndColor: '#4890FC',
    borderStartColor: '#4890FC',
    borderTopColor: '#4890FC',
    borderRadius: 20,
    width: 66,
    backgroundColor: '#4890FC',
    marginRight: 45,
  },
  caixa2: {
    display: 'flex',
    //justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
  },
  font: {
    color: 'white',
    fontFamily: 'sans-serif',
    paddingLeft: 8,
  },
  font2: {
    paddingLeft: 40,
    color: '#FFC300',
  }

});