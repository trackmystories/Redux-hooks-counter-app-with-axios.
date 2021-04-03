import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterComponent from "./src/components/CounterComponent";
import rootReducer from "./src/reducer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Counter example with Redux Hooks and Axios</Text>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
