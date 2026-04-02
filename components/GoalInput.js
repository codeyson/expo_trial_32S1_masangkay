import { View, TextInput, Button, StyleSheet, Pressable, Text} from "react-native"
import { useState } from "react";
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
              <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={textInputHandler} value={enteredGoalText}></TextInput>
              <Pressable onPress={addGoalHandler}   
                onPressIn={() => console.log("Pressed in")}
                onPressOut={() => console.log("Pressed out")}
                onLongPress={() => console.log("Long press")}
                delayLongPress={500}
              >

              </Pressable>
              <Pressable
                hitSlop={200}
                onPress={() => console.log("Pressed")}
              >
                <Text>bigger area</Text>
              </Pressable>
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