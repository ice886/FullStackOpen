const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  // console.log(course.name)
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <p>part1: {parts[0].name}, exercises: {parts[0].exercises}</p>
      <p>part2: {parts[1].name}, exercises: {parts[1].exercises}</p>
      <p>part3: {parts[2].name}, exercises: {parts[2].exercises}</p>
    </div>
  )
}

export default App