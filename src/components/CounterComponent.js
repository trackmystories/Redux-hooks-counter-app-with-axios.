import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import ActionButton from "./ActionButton";
import SubmitButton from "./SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { totalCount } from "../actions";

export default function CounterComponent() {
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);

  const total_counts = useSelector((state) => state.total_counts);
  const counter = useSelector((state) => state.counter);

  const { data } = total_counts;

  useEffect(() => getTotalCount(), []);

  const getTotalCount = () => {
    setIsFetching(true);

    let url = "https://url.firebaseio.com<name>.json";
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => dispatch(totalCount(data)))
      .catch((error) => alert(error.message))
      .finally(() => setIsFetching(false));
  };

  const onSubmit = (counterState) => {
    let url = "https://url.firebaseio.com<name>.json";
    axios.put(url, counterState).then((response) => {
      console.log(response);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <View>
          <ActionButton
            onPress={() =>
              dispatch({
                type: "SUBTRACT",
              })
            }
            title="subtract"
          />
        </View>

        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text style={styles.text}>
              Current state:
              {data.counter ? data.counter : counter}
            </Text>
          </View>
        )}

        <View>
          <ActionButton
            onPress={() =>
              dispatch({
                type: "ADD",
              })
            }
            title="add"
          />
        </View>
      </View>

      <SubmitButton
        onPress={onSubmit({
          counterState: counter,
        })}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    width: "80%",
    margin: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    margin: "3%",
    textAlign: "center",
  },
});
