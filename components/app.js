import React from 'react'

const App = (props) =>
  <div>
    <h1>{props.name}</h1>
    <button onClick={props.getWeather}>Get Weather</button>
    <div>
      <p>City Name: {props.state.city.name}</p>
      <p>Temperature: {props.state.city.temp}</p>
      <p>Weather: {props.state.city.description}</p>
    </div>

     {/* <form>
      <select name = 'cityDropdown'>
        <option value = '' disabled>City</option>
          {for (var i = 0; i < array.length; i++) {
            array[i]
          }
            return <option value={item.name}>{item.name}</option>
          }
      </select>
    </form> */}
  </div>

export default App
