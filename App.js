import { useEffect, useState } from "react";

import { StyleSheet } from "react-native";
import Navigator from "./src/navigation/index";
import PromptInformationScreen from "./src/screens/PromptInformationScreen";
import * as WebBrowser from "expo-web-browser";

import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { createUser } from "./src/graphql/mutations";
import { getUser } from "./src/graphql/queries";

Amplify.configure(awsconfig);

const promptingData = async () => {
  // get Auth user
  const authUser = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  });

  // query database using Auth user id (sub)
  const userData = await API.graphql(
    graphqlOperation(getUser, { id: authUser.attributes.sub })
  );

  return userData.data.getUser != null;
};

function App() {
  const [url, setUrl] = useState("");
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const fetchAuthUser = async () => {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setAuthUser(user);
    };
    fetchAuthUser();
  }, []);

  useEffect(() => {
    const syncUser = async () => {
      // query database using Auth user id (sub)
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );

      if (userData.data.getUser) {
        return;
      }

      // if there is no user, prompt user to enter data
      promptingData = true;

      const newUser = {
        id: authUser.attributes.sub,
        name: "x",
        age: "x",
        weight: "x",
        height: "x",
      };

      createUser = async () => {
        await API.graphql(graphqlOperation(createUser, { input: newUser }));
      };
    };
    syncUser();
  }, []);

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await fetch(
        "https://d14c-2a0c-5bc0-40-3e3d-425a-48fc-c88a-de5b.ngrok-free.app/connect",
        {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        }
      ).then((res) => {
        return res.text();
      });
      WebBrowser.openBrowserAsync(url);
    };
    fetchUrl();

    const fetchSession = async () => {
      const url = await fetch(
        "https://d14c-2a0c-5bc0-40-3e3d-425a-48fc-c88a-de5b.ngrok-free.app/getSession",
        {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        }
      ).then((res) => {
        console.log(res.text());
        return res.text();
      });
    };
    fetchSession();
  }, []);

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withAuthenticator(App);
