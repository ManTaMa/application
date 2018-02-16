import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";

const Touchable = props => {
  const Com = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback
  });

  return (
    <Com activeOpacity={0.6} {...props} style={{}}>
      {!props.isLoading ? (
        <View style={props.style}>{props.children}</View>
      ) : (
        <View style={props.style}>
          <ActivityIndicator color={"white"} />
        </View>
      )}
    </Com>
  );
};

export default Touchable;
