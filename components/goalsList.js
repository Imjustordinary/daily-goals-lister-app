import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList,
  } from "react-native";
  
  const GoalList=(props)=> {
    
    return (
      
        <View style={styles.listText}>
        <FlatList
          data={props.textlistGoal}
          keyExtractor={(item, key) => item.id}
          renderItem={(itemData) => {
            return <Text style={styles.eachOutput}>{itemData.item.text}</Text>;
          }}
        />
       
      </View>
        )}
  
  export default GoalList
  
  const styles = StyleSheet.create({
    listText: {
        flex:5,
        alignItems: "stretch",
        paddingHorizontal:16
      },
      eachOutput: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        marginVertical: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#2E0249",
        borderRadius: 7,
        
      },
  })