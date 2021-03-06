import React from 'react';
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Entry = (props) => {
  return (
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Contents = (props) => {
  return (
    <div>
      <Entry name={props.contacts[0].name} number={props.contacts[0].phonenumber} />
      <Entry name={props.contacts[1].name} number={props.contacts[1].phonenumber} />
      <Entry name={props.contacts[2].name} number={props.contacts[2].phonenumber} />
    </div>
  )
}

const App = () => {
  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]
  }

  return (
    <div>
      <Header title={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts}/>
    </div>
  )
}

 ReactDOM.render(<App />, document.getElementById('root'))