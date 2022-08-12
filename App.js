import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import styles from './Style';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
};

const App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: "#FFF",
      });
    }
    
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  }

  return (
    <>
      <ScrollView 
        backgroundColor='#1b262c'
        keyboardShouldPersistTaps='handled'
        contentInsetAdjustmentBehavior='automatic'
      >
        <SafeAreaView style={styles.container}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter Amount"
                placeholderTextColor="#c1c1c1"
                value={inputValue}
                onChangeText={(inputValue) => setInputValue(inputValue)}
              >
              </TextInput>
            </View>
            <View style={styles.convertButtonContainer}>
              {Object.keys(currencyPerRupee)
                .map((currency) => (
                  <TouchableOpacity 
                    style={styles.converterButton}
                    key={currency}
                    onPress = {() => buttonPressed(currency)}
                  >
                    <Text style={styles.converterButtonText}>{currency}</Text>
                  </TouchableOpacity>                 
                ))
              }
            </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default App;
