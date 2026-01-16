import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';
import { useState } from 'react';
const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');
  const calculateTax = () => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income amount');
      return;
    }
    let taxAmount = 0;
    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }
    setTax(taxAmount.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income Tax Calculator</Text>
      <TextInput
        style={styles.input}
        textAlign="right"
        keyboardType="numeric"
        placeholder="Enter your income"
        value={income}
        onChangeText={text => setIncome(text)}
      ></TextInput>
      <Button title="Calculate Income" onPress={calculateTax}></Button>
      <Text style={styles.result}>Income Tax: {tax} </Text>
    </View>
  );
};
export default App;
