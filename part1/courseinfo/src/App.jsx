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
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />
      <Footer exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App