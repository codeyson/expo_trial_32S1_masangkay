import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

return (
  <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler}></TextInput>
      <Button title='Add Goal' style={{padding: 50}} onPress={addGoalHandler}></Button>
    </View>
    <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
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
    borderWidth: 2, 
    borderColor: 'red', 
    padding: 16,
    backgroundColor: 'blue',
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    padding: 13,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 2,
    color: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 3,
  },
  goalsContainer: {
    flex: 5,
  },
});
