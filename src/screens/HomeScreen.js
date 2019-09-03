import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ImageList")}>
        <Text>Go to Image List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CounterScreen")}>
        <Text>Go to Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
        <Text>Go to Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SquareScreen")}>
        <Text>Go to Square Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TextScreen")}>
        <Text>Go to Text Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
