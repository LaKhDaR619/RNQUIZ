import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

export default function Test() {
  Alert.alert("Exit", "Are you sure you want to exit", [
    {
      text: "Cancel",
      onPress: () => {
        pauseTime(true);
      },
      style: "cancel",
    },
    { text: "OK", onPress: () => {} },
  ]);

  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
