import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size: number;
  focused: boolean;
  focusedColor: string;
  unfocusedColor: string;
};

const Icon = (props: IconProps) => {
  const { name, size, focused, focusedColor, unfocusedColor } = props;
  return (
    <View>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={focused ? focusedColor : unfocusedColor}
      />
    </View>
  );
};

export default Icon;
