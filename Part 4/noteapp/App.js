import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Styles';

const testNotes = [
  {
    id: 1,
    topic: "Note 1"
  },
  {
    id: 2,
    topic: "Note 2"
  },
  {
    id: 3,
    topic: "Note 3"
  },
  {
    id: 4,
    topic: "Note 4"
  }
]

class NoteScreen extends React.Component {
  state = {
    loading: true,
    error: false,
    notes: []
  }

  componentDidMount() {
    this.setState({
      loading: false,
      notes: testNotes
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (this.state.error) {
      return (
        <View>
          <Text>Failed to load notes!</Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.noteview}>
        {this.state.notes.map(note =>
          <Note
            key={note.id}
            id={note.id}
            topic={note.topic}
            navigation={this.props.navigation}
          />)}
        <Button style={styles.button} title="Add notes" onPress={() => this.props.navigation.navigate('Add notes') } />
      </ScrollView>
    );
  }
}

const Note = (props) => {
  return (
    <Text>{props.topic}</Text>
  )
}

const generateId = (min, max) => {
  return Math.random() * (max - min) + min;
}

class AddNoteScreen extends React.Component {

  render() {
    return (
      <View style={styles.adminview}>
        <TextInput
        placeholder="Write your note here"
        />
        <Button style={styles.button} title="Add note" onPress={() => alert("Feature not implemented!")} />
      </View>
    );
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={NoteScreen} />
        <Stack.Screen name="Add notes" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;