import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }


  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

return (
  <View style={styles.container}>
    <GoalInput onAddGoal={addGoalHandler} onChangeText={goalInputHandler} value={enteredGoalText}/>
    <View style={styles.goalsContainer}>
      <View style={styles.goalListContainer}>
      <GoalList goals={courseGoals} onDeleteItem={deleteGoalHandler} />
      </View>
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
  textStyle: {
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
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    padding: 13,
    backgroundColor: '#e1e1e1',
  
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  textInput: {
    borderWidth: 2,
    color: '#000000',
    width: '100%',
    marginRight: 15,
    padding: 10,
    borderRadius: 15,
  },
  goalsContainer: {
    flex: 10,
  },
  goalListContainer: {
    height: 200,
    flex: 1,
  },
});
