import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import './index.css';

const Button = ({ buttonClick, text }) => (
  <button onClick={buttonClick}> {text} </button>
)

const Anecdote = (props) => {
  return (
    <>
      {props.anecdote}
      <br />
      has {props.votes} vote(s)
    </>
  )
}

const MostUpvote = (props) => {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.mostUpvoted}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(6))
  const [mostVote, setMostVote] = useState(0)
  const [hasVote, setHasVote] = useState(false)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    const copy = { ...votes }
    setHasVote(true)
    if (votes[selected] > votes[mostVote]) {
      console.log('setMostVote')
      setMostVote(selected);
    }
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} points
      <br />
      <Button buttonClick={handleNextClick} text="next anecdote" />
      <Button buttonClick={handleVoteClick} text="vote" />
      <br />
      <MostUpvote mostUpvoted={anecdotes[mostVote]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
