import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [color, setColor] = useState("#Fe4");

  const BackgroundColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  const ChangeBackgroundColor = () => {
    setColor(BackgroundColor());
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity onPress={() => ChangeBackgroundColor()}>
        <Text style={styles.txt}>TAP ME</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 40,
    fontWeight: "600",
    padding: 10,
    backgroundColor: "#95a5a6",
    borderRadius: 10,
    color: "#fff",
  },
});
