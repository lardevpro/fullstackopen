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

const Part = (prompt) => {
  return(
  <div>
    <p>
      {prompt.part} {prompt.exercise}
    </p>
  </div>
  )
}

const Content = (prompt) => {
  console.log(prompt)
  return(
    <div>
        <Part part={prompt.part1} exercise={prompt.exercises1}/>
        <Part part={prompt.part2} exercise={prompt.exercises2}/>
        <Part part={prompt.part3} exercise={prompt.exercises3}/>
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