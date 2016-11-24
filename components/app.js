import React from 'react'
import { render } from 'react-dom'
import getWeather from ......

const App = (props) =>
  <div>

    <button onClick={getWeather(props)}>Get Weather</button>

  </div>
