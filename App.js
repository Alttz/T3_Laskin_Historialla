import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList, } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);


  const addNumbers = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setData([...data, { key: number1 + " + " + number2 + " = " + sum }]);
    setResult(sum);
  };

  const subtractNumbers = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setData([...data, { key: number1 + " - " + number2 + " = " + difference}]);
    setResult(difference);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addNumbers}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtractNumbers}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>History: </Text>
      <FlatList data={data} renderItem={({ item }) => <Text style={styles.flatListItem}>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 250,
    padding: 75,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginHorizontal: 60,
  },
  button: {
    backgroundColor: 'rgba(33,150,243,255)',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  flatListItem: {
    textAlign: 'center',
    fontSize: 18,
  },
});