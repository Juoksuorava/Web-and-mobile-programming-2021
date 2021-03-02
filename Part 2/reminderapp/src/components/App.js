import React from 'react';
import Reminder from './Reminder';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newReminder: '',
    }
  }

  addReminder = (event) => {
    event.preventDefault()
    const reminderObject = {
      topic: this.state.newReminder,
      time: new Date().toISOString(),
      id: this.state.reminders.length + 1
    }

    const reminders = this.state.reminders.concat(reminderObject)

    this.setState({
      reminders,
      newReminder: ''
    })
  }

  handleReminderChange = (event) => {
    console.log(event.target.value)
    this.setState({newReminder: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Add a reminder</h2>
        <form onSubmit={this.addReminder}>
          <div>
            Topic: <input value={this.state.newReminder} onChange={this.handleReminderChange}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Reminders:</h2>
        <ul>
          {this.state.reminders.map(reminder => <Reminder key={reminder.id} topic={reminder.topic} time={reminder.time}/>)}
        </ul>
      </div>
    )
  }
}

export default App;