import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

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


      <View style={styles.compareContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.compareUpperLabel}>You</Text>
          <Text style={styles.compareUpperLabel}>Recommended</Text>
        </View>

        <View>
          <Text style={styles.compareInfoLabel}></Text>
          
        </View>

        <View>
          <Text style={styles.compareInfoLabel}></Text>
        </View>

        <View>
          <Text style={styles.compareInfoLabel}></Text>
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
  startButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "orange",
    alignSelf: "center",
  },
  startButtonText: {
    textAlign: "center",
    lineHeight: 100,
    fontSize: 20,
    color: "white",
  },
  nextWorkoutContainer: {
    backgroundColor: "orange",
    borderRadius: 30,
    margin: 20,
    height: 250,
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
  compareContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    margin: 20,
    height: 250,
  },
  compareUpperLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,    
  },
});

export default HomeScreen;
