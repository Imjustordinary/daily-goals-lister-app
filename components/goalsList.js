import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList,
    Pressable
  } from "react-native";
  
  const GoalList=(props)=> {
    
    return (
      <View style={styles.listContainer}>
        <View style={styles.buttonStyle}>
        <Button
          color="#a065ec"
          
          title="Add goal"
          onPress={props.setShowHandler}
        />
        </View>
        <View style={styles.listText}>
           
        <FlatList
        style={styles.flatList}
          data={props.textlistGoal}
          keyExtractor={(item, key) => item.id}
          renderItem={(itemData) => {
            return (
              <Pressable onPress={()=>props.removeGoalHandler(itemData.item.id)}>
            <View style={styles.listText}><Text style={styles.eachOutput}>{itemData.item.text}</Text></View>
            </Pressable>
            )
          }}
        />
       
      </View>
      </View>
        )}
  
  export default GoalList
  
  const styles = StyleSheet.create({
    listText: {
        flex:8,
        alignItems: "stretch",
        paddingHorizontal:12,
      },
      eachOutput: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#2E0249",
        borderRadius: 7,
      },
      buttonStyle:{
        flex: 1,
        marginTop:50,
        marginHorizontal:8
      },
      listContainer:{
        flex:1,
        backgroundColor:'#1e085a'
      }
      
  })