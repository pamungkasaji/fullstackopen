import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({ buttonClick, text }) => {
  return(
    <button onClick={buttonClick}>
      {text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (!props.hasFeedback) {
    return (
      <tr>
        <td>No feedback has been given</td>
      </tr>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic name="good" value={props.good} />

          <Statistic name="neutral" value={props.neutral} />

          <Statistic name="bad" value={props.bad} />

          <Statistic name="total" value={props.total} />

          <Statistic name="average" value={props.average} />

          <Statistic
            name="positive"
            value={props.positive + " %"}
          />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hasFeedback, setHasFeedback] = useState(false)

  const total = good + neutral + bad;

  const handleClick = (type) => {
    setHasFeedback(true);

    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const statisticsProps = {
    hasFeedback: hasFeedback,
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: (good-bad)/(good+bad+neutral),
    positive: (good)/(bad+good+neutral)*100,
  }

  return (
    <div>
      <Heading text="Give Feedback" />
      <Button buttonClick={() => handleClick("good")} text='good' />
      <Button buttonClick={() => handleClick("neutral")} text='neutral' />
      <Button buttonClick={() => handleClick("bad")} text='bad' />
      <Heading text="Statistics" />

      <Statistics {...statisticsProps} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//Cara dua, hasil kurang sempurna
// const Heading = ({text}) => <h1>{text}</h1>

// const Button = ({ handleClick, text }) => {
//   return(
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// const Statistic = (props) => {
//   if (props.total === 0 && props.title === true) {
//     return (
//       <tr>
//         <td>No feedback has been given</td>
//       </tr>
//     )
//   }

//   if (props.total === 0) {
//     return (
//       <tr>
//         <td></td>
//       </tr>
//     )
//   }

//   return (
//     <tr>
//       <td>{props.name} {props.value}</td>
//     </tr>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const total = good + neutral + bad;
//   // console.log('total', total)

//   const handleGoodClick = () => setGood(good + 1)

//   const handleNeutralClick = () => setNeutral(neutral + 1)

//   const handleBadClick = () => setBad(bad + 1)

//   return (
//     <div>
//       <Heading text="Give Feedback" />
//       <Button handleClick={handleGoodClick} text='good' />
//       <Button handleClick={handleNeutralClick} text='neutral' />
//       <Button handleClick={handleBadClick} text='bad' />
//       <Heading text="Statistics" />

//       <Statistic title={true} total={total}/>
//       <Statistic name="good" total={total} value={good}/>
//       <Statistic name="neutral" total={total} value={neutral}/>
//       <Statistic name="bad" total={total} value={bad}/>
//       <Statistic name="average" total={total} value={(good-bad)/(good+bad+neutral)}/>
//       <Statistic name="positive" total={total} value={(good)/(bad+good+neutral)*100}/>
//       {/* <Statistic nimi="Average" summa={total} value={(good-bad)/(good+bad+neutral)}/>
//       <Statistic nimi="Positive" summa={total} value={good}/> */}
//     </div>
//   )
// }

// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )
