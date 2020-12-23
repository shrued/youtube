import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import VideoCard from "./videoCard";
import contentData from "../contentData.json";

export default function Home() {
  const renderItem = ({ item }) => {
    return (
      <VideoCard
        id={item.id}
        title={item.title}
        channel={item.channel}
        thumbnail={item.thumbnail}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={contentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
