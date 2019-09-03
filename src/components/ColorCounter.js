import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = props => {
  const { color, onIncrease, onDecrease } = props;

  return (
    <View>
      <Text style={{ textAlign: "center" }}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;
