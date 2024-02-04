import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import Navigator from "./src/navigation/index";
import RenderHtml from "react-native-render-html";
// import Widget from "./src/components/Widget";

export default function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await fetch(
        "https://6b0c-2a0c-5bc0-40-3e3d-13ec-d32e-b440-2277.ngrok-free.app/connect",
        {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        }
      ).then((res) => {
        return res.text();
      });
      console.log(url);
      window.location = url;
    };
    fetchUrl();
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View>
      <Text>Hello</Text>
      {/* <RenderHtml
        contentWidth={width}
        source={{ uri: url, headers: { mode: "no-cors" } }}
      /> */}
    </View>
    // <Widget />
    // <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
