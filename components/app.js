import React from 'react'

const App = (props) =>
  <div>
    <h1>{props.name}</h1>
    <button onClick={props.getWeather}>Get Weather</button>
    <div>
      <p>{props.state.city.name}</p>
      <p>{props.state.city.temperature}</p>
      <p>{props.state.city.description}</p>
    </div>
  </div>

export default App
