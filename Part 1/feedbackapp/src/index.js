import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0
    }
  }

  onClickGood = (value) => 
  () => {
      this.setState({ good: value })
  }

  onClickBad = (value) => 
  () => {
      this.setState({ bad: value })   
  }

  onClickNeutral = (value) => 
  () => {
      this.setState({ neutral: value })
  }


  render() {
      return (
          <div>
              <h1>Give feedback</h1>
              <Button
                  handleClick={this.onClickGood(this.state.good + 1)}
                  text="Good"
              />
              <Button
                  handleClick={this.onClickNeutral(this.state.neutral + 1)}
                   text="Neutral"
               />
              <Button
                   handleClick={this.onClickBad(this.state.bad + 1)}
                  text="Bad"
               />
               <h1>Statistics</h1>
              <History props={this.state}/>
              
          </div>
      ) 
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const History = ({ props }) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
      return (
      <div>
          <p>No feedback has been given yet.</p>
      </div>
      )
  } else {
      return (
          <Statistics props={props}/>
      )
  }
}

const Statistics = ({ props }) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  return (
      <div>
        <table id="statistics">
          <tbody>
            <Statistic name="Good" value={good}/>
            <Statistic name="Neutral" value={neutral} />
            <Statistic name="Bad" value={bad}/>
            <Statistic name="Average" value={Math.round((good-bad)/(good+bad+neutral) * 10) / 10} />
            <Statistic name="Positives" value={Math.round(((good)/(good+bad+neutral)*100) * 10) / 10 + ' %'} />
          </tbody>
        </table>
    </div>
  )
}  

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}:</td>
      <td>{props.value}</td>
    </tr>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))