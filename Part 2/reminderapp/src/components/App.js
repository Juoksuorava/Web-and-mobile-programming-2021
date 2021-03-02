import React from 'react'
import Reminders from './Reminders'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newReminder: '',
      newTime: ''
    }
  }

  addReminder = (event) => {
    event.preventDefault()
    const reminderObject = {
      topic: this.state.newReminder,
      time: this.state.newTime,
      id: this.state.reminders.length + 1
    }

    if (!this.state.reminders.some(tempReminder => tempReminder.topic === reminderObject.topic)) {
        const reminders = this.state.reminders.concat(reminderObject);
        this.setState({
          reminders,
          newReminder: '',
          newTime: ''
        })
    } else {
      alert("Failed to create reminder: reminder already exists");
    }
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
        <Reminders state={this.state}/>
      </div>
    )
  }
}

export default App;