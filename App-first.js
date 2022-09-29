import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [resulttext, setresut] = useState(" ");
  const [calculte, setcalculte] = useState("");

  const onClicked = (text) => {
    console.log(text);
    if ((text = "=")) {
      return calculation();
    }
    setresut(resulttext + text);
  };

  const calculation = () => {};

  const onCalculation = () => {
    if ((text = "X")) console.log(text);
    setresut(resulttexts + text);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 40 }}>{resulttext}</Text>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: "#f1f2f8",
        }}
      >
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onClicked(1);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(2);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(3);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                onCalculation("Clear");
              }}
              style={styles.numbers}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onClicked(4);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(5);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(6);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onCalculation("+");
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onClicked(7);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(8);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked(9);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                onCalculation("-");
              }}
              style={styles.numbers}
            >
              {" "}
              -{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onCalculation("*");
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClicked("0");
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onCalculation("=");
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}> = </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onCalculation("/");
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}> / </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onCalculation(Cut);
            }}
            style={styles.button}
          >
            <Text style={styles.numbers}> Cut </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  numbers: {
    color: "black",
  },
  button: {
    backgroundColor: "#acaba9",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
  },
});
