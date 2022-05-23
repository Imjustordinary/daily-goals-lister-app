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
  const [show, setShow] = useState(false)

  const setShowHandler =()=>{
    setShow(true)
  }

  const offShowHandler =()=>{
    setShow(false)
  }

  const removeGoalHandler =(id)=>{
    settextlistGoal(prevGoals => prevGoals.filter(each=>each.id !== id))
  }

  const onPressHandler = () => {
    settextlistGoal((prev) => [
      ...prev,
      { text: text, id: Math.random().toString() },
    ]);
    setText('')
    offShowHandler()
  };

  const onChangeTextHandler = (enteredText) => {
      console.log(enteredText)
    setText((prev) => enteredText);
  };
  return (
    <View style={styles.container}>

      <GoalInput show={show} offShowHandler={offShowHandler} onPressHandler={onPressHandler} onChangeTextHandler={onChangeTextHandler} text={text} />
      <GoalList removeGoalHandler={removeGoalHandler} textlistGoal={textlistGoal} setShowHandler={setShowHandler} />
     
    </View>
  );
}

export default GoalAdder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  
});
