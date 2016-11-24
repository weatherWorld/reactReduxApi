import React from 'react'
import { render } from 'react-dom'
import getWeather from '../index'

const App = (props) =>
  <div>
    <button onClick={getWeather(props)}>Get Weather</button>
  </div>
