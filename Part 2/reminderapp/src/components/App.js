import React from 'react'
import Reminders from './Reminders'
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
        {/*Form could be separated App.js to be a separate component.
        For UTU course DTEK2040 the current separation of components
        should be enough to clear Part 2 - Exercise 2.7*/}
        <form onSubmit={this.addReminder}>
          <div>
            Topic: <input value={this.state.newReminder} onChange={this.handleReminderChange}/>
          </div>
          <div>
            Time: <input value={this.state.newTime} onChange={this.handleTimeChange} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Reminders:</h2>
        <Reminders reminders={this.state.reminders}/>
      </div>
    )
  }
}

export default App;