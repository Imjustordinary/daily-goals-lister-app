
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const GoalInput=(props)=> {
  
  return (
    
      <View style={styles.containerBox}>
        <Button
          color="#a065ec"
          style={styles.buttonStyle}
          title="Add this text"
          onPress={props.onPressHandler}
        />
        <TextInput
          placeholderTextColor="#fff"
          onChangeText={props.onChangeTextHandler}
          placeholder="type smth here"
          style={styles.inputText}
        />
      </View>)}

export default GoalInput

const styles = StyleSheet.create({
    inputText: {
        padding: 5,
        color: "white",
        fontSize: 20,
      },
      containerBox: {
        flex:1,
        paddingTop: 30,
        paddingBottom:15,
        paddingHorizontal: 10,
      },
})