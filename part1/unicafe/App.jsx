import { useState } from 'react'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad === 0) {
        return (
            <div>
                <h1>statistics</h1>
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            
        </div>
    )
}

const StatisticLine = (props) => {
    if  (props.good + props.neutral + props.bad === 0) {
        return (
           <></>
        )
    }
    return (
        <div>
            <p>all {props.good + props.neutral + props.bad}</p>
            <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
            <p>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</p>
        </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} />
        <StatisticLine good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App