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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Footer exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App