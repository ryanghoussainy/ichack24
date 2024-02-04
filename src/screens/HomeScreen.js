import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.greeting}>Hello, Fred!</Text>

      <View style={styles.nextWorkoutContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.nextWorkoutUpperLabel, styles.nextWorkoutLeft]}>Your next workout is in</Text>
          <Text style={[styles.nextWorkoutLowerLabel, styles.nextWorkoutLeft]}>1 day, 12 hours</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={[styles.nextWorkoutUpperLabel, styles.nextWorkoutLeft]}>Length:</Text>
            <Text style={[styles.nextWorkoutLowerLabel, styles.nextWorkoutLeft]}>60 mins</Text>
          </View>

          <View style={{ flex: 2 }}>
            <Text style={styles.nextWorkoutUpperLabel}>Intensity:</Text>
            <Text style={styles.nextWorkoutLowerLabel}>High</Text>
          </View>
        </View>
      </View>

      <Text style={styles.compareText}>Let's compare...</Text>

      <View style={styles.compareContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.compareUpperLabel}>You</Text>
          <Text style={styles.compareUpperLabel}>Recommended</Text>
        </View>

        <View>
          <Text style={styles.compareInfoLabel}>Heartrate</Text>
          <View style={styles.userInfoBox}>
            <Text style={styles.userInfoText}>130 BPM</Text>
            <Text style={styles.userInfoText}>100 BPM</Text>
          </View>
        </View>

        <View>
          <Text style={styles.compareInfoLabel}>Average Time</Text>
          <View style={styles.userInfoBox}>
            <Text style={styles.userInfoText}>3 min</Text>
            <Text style={styles.userInfoText}>10 min</Text>
          </View>
        </View>

        <View>
          <Text style={styles.compareInfoLabel}>Frequency</Text>
          <View style={styles.userInfoBox}>
            <Text style={styles.userInfoText}>30 min / week</Text>
            <Text style={styles.userInfoText}>60 min / week</Text>
          </View>
        </View>
      </View>

      
      {/* Start Button */}
      <Pressable
        onPress={() => navigation.navigate("Workout")}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>START</Text>

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 25,
  },
  startButton: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "orange",
    alignSelf: "center",
    bottom: -130,
    position: "absolute"
  },
  startButtonText: {
    textAlign: "center",
    lineHeight: 100,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  nextWorkoutContainer: {
    backgroundColor: "orange",
    borderRadius: 30,
    margin: 10,
    height: 250,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  nextWorkoutLeft: {
    marginLeft: 20,
  },
  nextWorkoutUpperLabel: {
    fontSize: 22,
    color: "#fbda9d",
    fontWeight: "bold",
    marginTop: 10,
  },
  nextWorkoutLowerLabel: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  compareText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 40,
    color: "orange",
  },
  compareContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    margin: 10,
    height: 300,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  compareUpperLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,    
  },
  compareInfoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
    marginLeft: 15,
    marginBottom: 5,
  },
  userInfoBox: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 15,
  },
  userInfoText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
});

export default HomeScreen;
