import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Trending</Text>
      </View>
      <View style={styles.item}>
        <Text>Music</Text>
      </View>
      <View style={styles.item}>
        <Text>Gaming</Text>
      </View>
      <View style={styles.item}>
        <Text>News</Text>
      </View>
      <View style={styles.item}>
        <Text>Films</Text>
      </View>
      <View style={styles.item}>
        <Text>Fashion & beauty</Text>
      </View>
      <View style={styles.item}>
        <Text>Learning</Text>
      </View>
      <View style={styles.item}>
        <Text>Live</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    margin: 5,
  },
  item: {
    alignItems: "center",
    width: "50%",
    padding: 5,
    backgroundColor: "orange",
    borderRadius: 3,
    marginBottom: 5,
  },
});
