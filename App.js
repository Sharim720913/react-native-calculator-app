import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [digit, setDigit] = useState("");

  const textback = (goback) => {
    if (goback == "C") {
      return setDigit(digit.toString().substring(0, digit.length - 1));
    }
  };

  const addDigit = (text) => {
    setDigit(digit + text);
  };

  const clearAll = () => {
    setDigit("");
  };

  const Calculation = () => {
    setDigit(eval(digit).toString());
  };

  return (
    // {main Container}
    <View style={styles.container}>
      {/* resultsection */}
      <View style={styles.resultsection}>
        <TextInput style={styles.fontdesign}>{digit}</TextInput>
      </View>

      {/* { Button container} */}

      <View style={styles.buttonrow}>
        <TouchableOpacity onPress={clearAll} style={styles.button4}>
          <Text style={styles.fontdesign}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("()")} style={styles.button2}>
          <Text style={styles.fontdesign}>( )</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("%")} style={styles.button2}>
          <Text style={styles.fontdesign}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("/")} style={styles.button2}>
          <Text style={styles.fontdesign}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("7")} style={styles.button}>
          <Text style={styles.fontdesign}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("8")} style={styles.button}>
          <Text style={styles.fontdesign}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("9")} style={styles.button}>
          <Text style={styles.fontdesign}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("*")} style={styles.button2}>
          <Text style={styles.fontdesign}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("4")} style={styles.button}>
          <Text style={styles.fontdesign}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("5")} style={styles.button}>
          <Text style={styles.fontdesign}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("6")} style={styles.button}>
          <Text style={styles.fontdesign}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("-")} style={styles.button2}>
          <Text style={styles.fontdesign}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("1")} style={styles.button}>
          <Text style={styles.fontdesign}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("2")} style={styles.button}>
          <Text style={styles.fontdesign}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("3")} style={styles.button}>
          <Text style={styles.fontdesign}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("+")} style={styles.button2}>
          <Text style={styles.fontdesign}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit("0")} style={styles.button}>
          <Text style={styles.fontdesign}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit(".")} style={styles.button5}>
          <Text style={styles.fontdesign}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => textback("C")} style={styles.button}>
          <Text style={styles.fontdesign}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Calculation} style={styles.button3}>
          <Text style={styles.fontdesign}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b1b1d",
    height: 900,
  },
  resultsection: {
    backgroundColor: "#2f313d",
    justifyContent: "center",
    height: 300,
    marginTop: 7,
    padding: 0,
    borderRadius: 30,
  },

  fontdesign: {
    color: "white",
    fontSize: 35,
    fontStyle: "normal",
  },
  button: {
    backgroundColor: "#222328",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 7,
  },
  button2: {
    backgroundColor: "#3f4659",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 8,
  },
  button3: {
    backgroundColor: "#28457f",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 8,
  },
  button4: {
    backgroundColor: "#583d58",
    borderRadius: 40,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 8,
  },
  button5: {
    backgroundColor: "#222328",
    borderRadius: 40,
    width: 80,
    height: 80,
    alignItems: "center",

    margin: 8,
  },
  buttonrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
});
