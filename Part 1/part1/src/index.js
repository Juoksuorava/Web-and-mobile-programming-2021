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
      <Entry name="John Doe" number="358401234567" />
      <Entry name="Jane Doe" number="44551234567" />
      <Entry name="Foo bar" number="000" />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header title="Superadvanced web phonebook app" />
      <Contents />
    </div>
  )
}

 ReactDOM.render(<App />, document.getElementById('root'))