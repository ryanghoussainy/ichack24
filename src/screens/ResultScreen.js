import React, { useState, useEffect } from "react";
import Timer from "./../components/Timer";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

const TimerScreen = ({ navigation }) => {
  useEffect(() => {
    const fetchUrl = async () => {
      const url = await fetch(
        "https://6b0c-2a0c-5bc0-40-3e3d-13ec-d32e-b440-2277.ngrok-free.app/send",
        {
          method: "POST",
          body: {
            userId: "7b20748f-29ac-4f90-9bf6-c77485a4e06b",
          },
        }
      )
        .then((res) => {
          return res.text();
        })
        .catch((err) => {});
      console.log(url);
    };
    fetchUrl();
  }, []);

  handleSubmit = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text>Our predictions...</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Return to dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
