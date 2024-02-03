import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import TimerScreen from "../screens/TimerScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        style={styles.header}
        screenOptions={{
          headerStyle: styles.navigation,
          headerTitleStyle: styles.title,
          headerTintColor: "blue",
        }}
      >
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="Workout in progress!" component={TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: "whitesmoke",
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default Navigator;
