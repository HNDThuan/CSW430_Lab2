import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const inputNumber = (num: string) => {
    if (display === '0') setDisplay(num);
    else setDisplay(display + num);
  };

  const inputOperator = (op: string) => {
    setOperator(op);
    setFirstValue(display);
    setDisplay('0');
  };

  const calculate = () => {
    const a = parseFloat(firstValue);
    const b = parseFloat(display);
    let result = 0;

    if (operator === '+') result = a + b;
    if (operator === '-') result = a - b;
    if (operator === '*') result = a * b;
    if (operator === '/') result = a / b;

    setDisplay(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const clearAll = () => {
    setDisplay('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        <Btn text="7" onPress={() => inputNumber('7')} />
        <Btn text="8" onPress={() => inputNumber('8')} />
        <Btn text="9" onPress={() => inputNumber('9')} />
        <OperatorBtn text="÷" onPress={() => inputOperator('/')} />
      </View>

      <View style={styles.row}>
        <Btn text="4" onPress={() => inputNumber('4')} />
        <Btn text="5" onPress={() => inputNumber('5')} />
        <Btn text="6" onPress={() => inputNumber('6')} />
        <OperatorBtn text="×" onPress={() => inputOperator('*')} />
      </View>

      <View style={styles.row}>
        <Btn text="1" onPress={() => inputNumber('1')} />
        <Btn text="2" onPress={() => inputNumber('2')} />
        <Btn text="3" onPress={() => inputNumber('3')} />
        <OperatorBtn text="−" onPress={() => inputOperator('-')} />
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.zeroButton]}
          onPress={() => inputNumber('0')}
        >
          <Text style={styles.numberText}>0</Text>
        </TouchableOpacity>

        <OperatorBtn text="+" onPress={() => inputOperator('+')} />

        <TouchableOpacity
          style={[styles.button, styles.equalButton]}
          onPress={calculate}
        >
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
        <Text style={styles.clearText}>C</Text>
      </TouchableOpacity>
    </View>
  );
}

const Btn = ({ text, onPress }: any) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.numberText}>{text}</Text>
  </TouchableOpacity>
);

const OperatorBtn = ({ text, onPress }: any) => (
  <TouchableOpacity
    style={[styles.button, styles.operatorButton]}
    onPress={onPress}
  >
    <Text style={styles.operatorText}>{text}</Text>
  </TouchableOpacity>
);
