import { View, Text, StyleSheet, Pressable} from "react-native"

function GoalItem(props) {
     return(
        <View style={styles.goalItems}>
          <Pressable style={styles.goalText} onPress={() => props.onDeleteItem(props.id)}>
            <Text>{props.text}</Text>
          </Pressable>
        </View>
    )
};
   
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 16,
    borderWidth: 5,
    borderColor: '#eab308',
    padding: 16,
    backgroundColor: '#8e8e95',
    borderRadius: 8,
  },
  goalText: {
    margin: 16,
    borderWidth: 5,
    borderColor: '#eab308',
    padding: 16,
    backgroundColor: '#8e8e95',
    borderRadius: 8,
    color: '#fafafa',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});