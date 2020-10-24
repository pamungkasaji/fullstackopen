import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = (props) => {
  if (props.total === 0 && props.title === true) {
    return (
      <tr>
        <td>No feedback has been given</td>
      </tr>
    )
  }

  if (props.total === 0) {
    return (
      <tr>
        <td></td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.name} {props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  // console.log('total', total)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Heading text="Give Feedback" />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Heading text="Statistics" />

      <Statistic title={true} total={total}/>
      <Statistic name="good" total={total} value={good}/>
      <Statistic name="neutral" total={total} value={neutral}/>
      <Statistic name="bad" total={total} value={bad}/>
      <Statistic name="average" total={total} value={(good-bad)/(good+bad+neutral)}/>
      <Statistic name="positive" total={total} value={(good)/(bad+good+neutral)*100}/>
      {/* <Statistic nimi="Average" summa={total} value={(good-bad)/(good+bad+neutral)}/>
      <Statistic nimi="Positive" summa={total} value={good}/> */}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
