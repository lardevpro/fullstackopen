const Header = (prompt) => {
  console.log(prompt)
  return (    
    <div>
      <h1>
        {prompt.course}
      </h1>
    </div>
  )
}

const Content = (prompt) => {
  console.log(prompt)
  return(
    <div>
        <p>
          {prompt.part1} {prompt.exercises1}
        </p>
        <p>
          {prompt.part2} {prompt.exercises2}
        </p>
        <p>
          {prompt.part3} {prompt.exercises3}
        </p>
    </div>
  )
}

const Footer = (prompt) => {
  console.log(prompt)
  return (
    <div>
      <p>
        Number of exercises {prompt.exercises}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Footer exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App