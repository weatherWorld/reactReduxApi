import React from 'react'

const App = (props) =>
  <div>
    <h1>{props.name}</h1>
    <button onClick={props.getWeather}>Get Weather</button>
    <div>
      <p>{props.state.city.name}</p>
      <p>{props.state.city.temp}</p>
      <p>{props.state.city.description}</p>
    </div>

    <form>
      <select name = 'cityDropdown'>
        <option value = '' disabled>City</option> {
          {props.state.city.map(function(item){
            return <option>value={item.name}>{item.name}</option>
          })}
        }
      </select>
    </form>
  </div>

export default App
