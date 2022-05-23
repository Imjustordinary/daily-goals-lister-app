
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
  Image
} from "react-native";

const GoalInput=(props)=> {
  
  return (
    <Modal visible={props.show} animationType='slide'>
      <View style={styles.containerBox}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        
        <TextInput
        value={props.text}
          onChangeText={props.onChangeTextHandler}
          placeholder="type smth here"
          style={styles.inputText}
        />
        <View style={styles.buttonsContainer}>
          <Button 
          color="#a065ec"
          title="Add this text"
          onPress={props.onPressHandler} />
          <Button 
          color="#DA251D"
          title="Cancel"
          onPress={props.offShowHandler} />
        </View>
      </View>
    </Modal>
      )}

export default GoalInput

const styles = StyleSheet.create({
    inputText: {
        padding: 8,
        borderRadius:5,
        marginBottom:15,
        fontSize: 20,
        backgroundColor:'white',
      },
      containerBox: {
        flex:1,
        paddingTop: 50,
        paddingBottom:15,
        paddingHorizontal: 10,
        backgroundColor: "#1e085a",
      },
      image:{
        alignSelf:'center',
        height:150,
        width:150
      },
      buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
      }

})