import React from 'react'
import Reminders from './Reminders'
import Form from './Form'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    console.log("constructed")
    super(props)
    this.state = {
      reminders: [],
      newReminder: '',
      newTime: ''
    }
  }

  addReminder = (event) => {
    event.preventDefault()
    let mounted = true;
    const reminderObject = {
      topic: this.state.newReminder,
      time: this.state.newTime,
    }

    if (!this.state.reminders.some(tempReminder => tempReminder.topic === reminderObject.topic)) {
      axios.post('http://localhost:3001/reminders', reminderObject)
        .then(response => {
          if(mounted) {
            console.log(response)
            this.setState({
              reminders: this.state.reminders.concat(response.data),
              newReminder: '',
              newTime: ''
            })
          }
      })
    } else {
      alert("Failed to create reminder: reminder already exists");
    }
    return () => mounted = false;
  }

  deleteReminder = (id) => {
    if(window.confirm("Do you want to delete this reminder?")){
      axios.delete(`http://localhost:3001/reminders/${id}`)
        .then(response => {
          console.log(response)
          console.log(response.data)
          this.setState({
            reminders: this.state.reminders.filter(reminder => reminder.id !== id)
          })
        })
        .catch(error => {
          console.log('fail')
        })
    }   
  }

  componentDidMount(){
    console.log("mounted")
    axios.get('http://localhost:3001/reminders')
      .then(response => {
        console.log(response)
        this.setState({
          reminders: response.data,
        })
        console.log("promise resolved")
        })
  }

  handleReminderChange = (event) => {
    console.log(event.target.value)
    this.setState({newReminder: event.target.value})
  }

  handleTimeChange = (event) => {
    console.log(event.target.value)
    this.setState({newTime: event.target.value})
  }

  

  render() {
    console.log("render")
    return (
      <div>
        <h2>Add a reminder</h2>
        <Form state={this.state} addReminder={this.addReminder} handleReminderChange={this.handleReminderChange} handleTimeChange={this.handleTimeChange}/>
        <h2>Reminders:</h2>
        <Reminders reminders={this.state.reminders} deleteReminder={this.deleteReminder}/>
      </div>
    )
  }
}

export default App;