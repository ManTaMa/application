import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = props => {
  return (
    <View
      style={{
        backgroundColor: "#f7f7f7",
        width: "70%",
        height: 3,
        marginHorizontal: 45
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#bedf1e",
          width: props.percent + "%",
          height: 3
        }}
      />
    </View>
  );
};

export default ProgressBar;
