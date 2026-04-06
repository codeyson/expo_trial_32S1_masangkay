import { View, Text, StyleSheet, Pressable, Modal, Button } from "react-native"
import { useState } from "react";

function GoalItem(props) {
  const [modalVisible, setModalVisible] = useState(false);

  function openModalHandler() {
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
  }

  function confirmDeleteHandler() {
    props.onDeleteItem(props.id);
    setModalVisible(false);
  }

  return(
    <View style={styles.goalItem}>
      
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text>Are you sure you want to delete?</Text>
            <View>
              <Button title="Yes" onPress={confirmDeleteHandler} />
              <Button title="Cancel" onPress={closeModalHandler} />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.goalText}>
        <Text>{props.text}</Text>
      </Pressable>
      <Button title="Delete" onPress={openModalHandler} />
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    margin: 16,
    borderWidth: 5,
    padding: 16,
    backgroundColor: '#8e8e95',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  goalText: {
    margin: 16,
    borderWidth: 5,
    borderColor: '#eab308',
    padding: 16,
    backgroundColor: '#8e8e95',
    borderRadius: 8,
  },


  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  }});