import { View, Text } from "react-native";
import { StyleSheet } from "react-native-web";

const WorkoutsScreen = () => {
  return (
    <View>
      <Text style={styles.greeting}>Workouts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 30,
    textAlign: "center",
    margin: 25,
    fontWeight: "bold",
  },
})

export default WorkoutsScreen;
