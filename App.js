import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/pages/Home";

function App() {
  return <SafeAreaView style={styles.tela}>
      <Home />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  }
})

export default App;