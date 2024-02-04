import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { updateUser } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation } from "@react-navigation/core";

const PromptInformationScreen = ({ authUserID }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const navigation = useNavigation();

  const submit = () => {
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      weight.trim() === "" ||
      height.trim() === ""
    ) {
      Alert.alert("Please fill in all the fields");
    } else {
      const newUser = {
        id: authUserID,
        name: name,
        age: age,
        weight: weight,
        height: height,
      }

      createUser = async () => {
        await API.graphql(
          graphqlOperation(updateUser, { input: newUser })
        )
      }
      createUser();
      navigation.navigate("Dashboard")
    }
  };

  return (
    <View>
      <Text style={styles.greeting}>
        Please provide us some information about you...
      </Text>

      <Text style={styles.inputLabel}>Name*</Text>
      <TextInput
        value={name}
        style={styles.input}
        placeholder="First name"
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.inputLabel}>Age*</Text>
      <TextInput
        value={age}
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
      />

      <Text style={styles.inputLabel}>Weight*</Text>
      <TextInput
        value={weight}
        style={styles.input}
        placeholder="Weight"
        onChangeText={(text) => setWeight(text)}
      />

      <Text style={styles.inputLabel}>Height*</Text>
      <TextInput
        value={height}
        style={styles.input}
        placeholder="Height"
        onChangeText={(text) => setHeight(text)}
      />

      <Pressable style={styles.submit} onPress={() => submit()}>
        <Text style={styles.submitText}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 29,
    textAlign: "center",
    margin: 40,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "whitesmoke",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  inputLabel: {
    fontSize: 15,
    margin: 20,
  },
  submit: {
    backgroundColor: "orange",
    padding: 20,
    margin: 20,
    marginTop: 40,
    borderRadius: 20,
  },
  submitText: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default PromptInformationScreen;
