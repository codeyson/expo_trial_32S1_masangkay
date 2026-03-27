import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' style={styles.textInput}></TextInput>
        <Button title='Add Goal'></Button>
      </View>
      <View>
          <Text>List of Course Goals</Text>
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
    padding: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  textInput: {
    borderWidth: 2,
    color: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 3,
  }
});


const styles2 = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'blue',
    color: 'white',
  },
};

