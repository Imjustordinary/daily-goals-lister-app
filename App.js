import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const inputText = useRef()
  const [outPut, setOutPut] = useState(false)
  const [textlistGoal, settextlistGoal] = useState([])
  const [text, setText] = useState('')

  const onPressHandler =()=>{

    settextlistGoal(prev=>[...prev, text])
  }

  const onChangeTextHandler =(enteredText)=>{
    setText(prev=>enteredText)
  }
  return (
    <View style={styles.container}>
    {/* <View >
      <Text>{outPut?"Hello World":"Bonjour"}</Text>
      <StatusBar style="auto" />
      <Button title='Click' onPress={()=>setOutPut((prevEl)=>!prevEl)} />
    </View> */}
    <View>
      <TextInput onChangeText={(event)=>onChangeTextHandler(event)} placeholder="type smth" style={styles.inputText}/>
      <Button title='Add this text' onPress={onPressHandler} />
    </View>
    <View>
    {
      textlistGoal.map(each=>{
        return(
        <Text key={each}>
          {each}
        </Text>
        )
      })
    }
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    borderWidth:1,
    borderColor:'grey',
    padding:5
  }
});
