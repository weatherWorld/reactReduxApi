import React from 'react'

const App = (props) =>
  <div>
    <h1>{props.name}</h1>
    <button onClick={props.getWeather}>Get Weather</button>
  </div>

export default App
