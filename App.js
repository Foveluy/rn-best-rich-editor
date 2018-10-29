import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import WebViewRichEditor from "./RichEditor";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebViewRichEditor />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
