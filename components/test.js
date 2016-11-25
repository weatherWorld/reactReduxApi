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

    <form>
      <select name = 'cityDropdown'>
        <option value={props.state.city.name}>{props.state.city.name}</option>
      </select>
    </form>
  </div>

export default App
