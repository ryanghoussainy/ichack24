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
  const [time, setTime] = React.useState(0);

  // /* -1 => stopped, 0 => paused, 1 => playing */
  const [status, setStatus] = useState(1);
  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    let timerID;
    if (status === 1) {
      if (time > 1000 * 60 * 0.1) {
        setStatus(1);
        alert("Workout completed");
        clearInterval(timerID);
        reset();
      }
      timerID = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(timerID);
      reset();
    }
    return () => {
      clearInterval(timerID);
    };
  }, [status]);

  useEffect(() => {
    if (time > 1000 * 100 * 0.1) {
      Alert.alert("Workout completed!!", "Great job! 🎉🎉🎉");
      setStatus(0);
      handleStop();
    }
  }, [time]);

  const handleStop = () => {
    // make call to backend
    setStatus(0);
    navigation.navigate("Result");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingBottom: 50 }}>
        <Timer time={time} />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.upperLabel}>Heart Rate:</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dataText}>100 BPM</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.upperLabel}>Blood-oxygen Level:</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dataText}>93%</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleStop} style={styles.stopButton}>
        <Text
          style={{ position: "absolute", top: windowWidth * 0.2, fontSize: 40, color: "white", fontWeight: "bold"}}
        >
          STOP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "orange",
    margin: 10,
    borderRadius: 20,
    marginTop: 40,
  },
  stopButton: {
    position: "absolute",
    bottom: -(windowWidth * 0.5),
    backgroundColor: "orange",
    borderRadius: windowWidth * 0.5,
    width: windowWidth,
    height: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "whitesmoke",
    borderWidth: 40,
  },
  dataText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  upperLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fbda9d",
  },
});

export default TimerScreen;
