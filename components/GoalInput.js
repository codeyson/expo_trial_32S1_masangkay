import { View, TextInput, Button, StyleSheet, Pressable, Text, Modal} from "react-native"
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function textInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <View style={styles.inputContainer}>
          <View>
            <Ionicons name="person" size={30} color="black" />
          </View>
              <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={textInputHandler} value={enteredGoalText}></TextInput>
              <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '100%',
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
});