import React from 'react';
import Reminder from './Reminder';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          topic: 'Buy some eggs',
          timestamp: "XXXX",
        }
      ],
      newReminder: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Add a reminder</h2>
        <form>
          <div>
            Topic: <input />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Reminders:</h2>
        <ul>
          {this.state.reminders.map(reminder => <Reminder topic={reminder.topic} time={reminder.time}/>)}
        </ul>
      </div>
    )
  }
}

export default App;