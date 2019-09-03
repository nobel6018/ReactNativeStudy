import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const STEP_AMOUNT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const ReduxCounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: STEP_AMOUNT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: STEP_AMOUNT });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReduxCounterScreen;
