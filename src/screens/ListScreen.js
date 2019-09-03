import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { id: "1", name: "Friend #1", age: "20" },
    { id: "2", name: "Friend #2", age: "21" },
    { id: "3", name: "Friend #3", age: "22" },
    { id: "4", name: "Friend #4", age: "23" },
    { id: "5", name: "Friend #5", age: "24" },
    { id: "6", name: "Friend #6", age: "25" }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.id}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;
