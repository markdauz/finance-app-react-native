import React from "react";
import { Text } from "react-native";

type TabLabelProps = {
  children: string;
  focused: boolean;
  focusedColor: string;
  unfocusedColor: string;
};

const TabLabel = (props: TabLabelProps) => {
  const { children, focused, focusedColor, unfocusedColor } = props;
  return (
    <Text
      style={{
        color: focused ? focusedColor : unfocusedColor,
        fontSize: 12,
      }}
    >
      {children}
    </Text>
  );
};

export default TabLabel;
