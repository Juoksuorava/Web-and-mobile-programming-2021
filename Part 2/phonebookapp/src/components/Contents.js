import React from 'react';
import Entry from './Entry';

const Contents = (props) => {

    return (
      <div>
            <table>
                <tbody>
                    {props.contacts.map(entry => <Entry name={entry.name} number={entry.phonenumber} />)}
                </tbody>
            </table>
      </div>
    )
  }

export default Contents;