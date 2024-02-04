import React from "react";
import { View, Text } from "react-native";

const Timer = ({ time }) => {
  const transformMinutes = () => {
    const convertedValue = Math.floor((time / 60000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2);
    return formattedValue;
  };

  const transformSeconds = () => {
    const convertedValue = Math.floor((time / 1000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2);
    return formattedValue;
  };

  // const transformMilliseconds = () => {
  //   const convertedValue = Math.floor((time / 10) % 100);
  //   const formattedValue = ("0" + convertedValue).slice(-2);
  //   return formattedValue;
  // };

  return (
    <View>
      <Text style={{ fontSize: 100, color: "white", marginTop: 50, fontWeight: "bold" }}>
        {transformMinutes()}:
        {transformSeconds()}
        {/* :<Text> </Text> */}
        {/* {transformMilliseconds()} */}
      </Text>
    </View>
  );
};

export default Timer;
