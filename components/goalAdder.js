import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalInput from "./goalInput";
import GoalList from "./goalsList";

const GoalAdder=()=> {
  const inputText = useRef();
  const [outPut, setOutPut] = useState(false);
  const [textlistGoal, settextlistGoal] = useState([]);
  const [text, setText] = useState("");

  const onPressHandler = () => {
    settextlistGoal((prev) => [
      ...prev,
      { text: text, id: Math.random().toString() },
    ]);
  };

  const onChangeTextHandler = (enteredText) => {
      console.log(enteredText)
    setText((prev) => enteredText);
  };
  return (
    <View style={styles.container}>

      <GoalInput onPressHandler={onPressHandler} onChangeTextHandler={onChangeTextHandler} />
      <GoalList textlistGoal={textlistGoal} />
     
    </View>
  );
}

export default GoalAdder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  
});
