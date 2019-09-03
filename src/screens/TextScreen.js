import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length < 5 && name.length > 0 ? (
        <Text>Password should be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});
export default TextScreen;
