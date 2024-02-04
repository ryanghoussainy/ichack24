import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import TimerScreen from "../screens/TimerScreen";
import HomeScreen from "../screens/HomeScreen";
import PromptInformationScreen from "../screens/PromptInformationScreen";

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
          headerShown: false,
        }}
      >
        <Stack.Screen name="Prompt" component={PromptInformationScreen} />
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="Workout" component={TimerScreen} />
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
