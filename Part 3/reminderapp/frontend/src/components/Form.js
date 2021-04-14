import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.addReminder}>
            <div>
                Topic: <input value={props.state.newReminder} onChange={(e) => props.handleReminderChange(e)}/>
            </div>
            <div>
                Time: <input value={props.state.newTime} onChange={(e) => props.handleTimeChange(e)}/>
            </div>
            <div>
            <button type="submit">Add</button>
          </div>
        </form>
    )
}

export default Form