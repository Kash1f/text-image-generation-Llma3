import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = ({
  children,
  color = "white",
  fontSize = 15,
  opacity = 1,
  fontWeight = "bold",
  style,
  ...props
}) => {
  return (
    <View>
      <Text style={{ fontWeight, color, opacity, fontSize }} {...props}> {children}
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
