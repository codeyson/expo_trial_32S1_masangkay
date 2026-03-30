import { View, Text, StyleSheet} from "react-native"

function GoalItem() {
     return(
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
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