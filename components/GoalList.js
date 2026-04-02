import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

function GoalList(props) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.goals}
        keyExtractor={(item) => item.id}  
        renderItem={(itemData) => (
          <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={props.onDeleteItem}
          />
        )}
      />
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  listContainer: {
    height: 200,
    width: '100%',
  },
});