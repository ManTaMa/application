import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from "react-native";

const Touchable = props => {
  return Platform.select({
    ios: () => (
      <TouchableOpacity activeOpacity={0.7} {...props}>
        <View style={props.style}>{props.children}</View>
      </TouchableOpacity>
    ),
    android: () => <TouchableNativeFeedback {...props} />
  })();
};

export default Touchable;
