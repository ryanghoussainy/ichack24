import React, { useState, useEffect } from "react";
import Timer from "./../components/Timer";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
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
      // if (status === -1) reset();
    }
    return () => {
      clearInterval(timerID);
    };
  }, [status]);

  useEffect(() => {
    if (time > 1000 * 60 * 0.1) {
      alert("Workout completed");
      setStatus(0);
    }
  }, [time]);

  // const handlePause = () => {
  //   setStatus(status === 0 ? 1 : 0);
  // };

  const handleStop = () => {
    // make call to backend
    setStatus(0);
    // navigation.navigate("Home");
  };

  // 3 2 1

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingBottom: 50 }}>
        <Timer time={time} />
        <Text>Target: 80 mins</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Intensity rate:</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dataText}>100 BPM</Text>
            <Text style={styles.dataText}>Target: 80 BPM</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text>Heart rate:</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dataText}>100 BPM</Text>
            <Text style={styles.dataText}>Target: 80 BPM</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleStop} style={styles.stopButton}>
        <Text
          style={{ position: "absolute", top: windowWidth * 0.2, fontSize: 30 }}
        >
          STOP
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handlePause}>
        <Text>{status === 1 ? "Pause" : "Resume"}</Text>
      </TouchableOpacity>
      {status === 0 && (
        <TouchableOpacity onPress={handleStop}>
          <Text>End workout</Text>
        </TouchableOpacity>
      )} */}
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
    justifyContent: "center",
    backgroundColor: "white",
  },
  stopButton: {
    position: "absolute",
    bottom: -(windowWidth * 0.4),
    backgroundColor: "white",
    borderRadius: windowWidth * 0.4,
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 10,
    elevation: 10,
  },
  dataText: {
    fontSize: 20,
  },
});

export default TimerScreen;
