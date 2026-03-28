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
    setEnteredGoalText('');
  }

return (
  <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
      <Button title='Add Goal' style={{padding: 50}} onPress={addGoalHandler} ></Button>
    </View>
    <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text style={styles.textStyle} >{goal}</Text>)}
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
});
