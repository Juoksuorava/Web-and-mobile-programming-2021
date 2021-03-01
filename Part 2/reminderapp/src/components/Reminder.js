import React from 'react';

const Reminder = (props) => {
    return (
      <li>{props.time} {props.topic}</li>
    )
}

export default Reminder;