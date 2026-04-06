import { View, TextInput, Button, StyleSheet, Text, Modal } from "react-native"
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function textInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if (props.goalsCount >= 5) {
            setModalVisible(true);
            return;
        }
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    function closeModalHandler() {
        setModalVisible(false);
    }

    function welcomePopupHandler() {
        alert('Welcome to the app!')
    }

    return(
        <View style={styles.inputContainer}>
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                You have too many goals!
              </Text>
              <Button title="OK" onPress={closeModalHandler} />
            </View>
          </Modal>
          <View>
            <Ionicons name="person" size={30} color="black" onPress={welcomePopupHandler} />
          </View>
          <TextInput 
            placeholder='Your Course Goal' 
            style={styles.textInput} 
            onChangeText={textInputHandler} 
            value={enteredGoalText}
          />
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});