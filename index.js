import React from 'react'
import { render } from 'react-dom'
import redux from 'redux'
import clone from 'clone'
import request from 'superagent'

import reducer from '/reducer/reducer'

const initialState = {
  city: [{
    name: 'Wellington',
    country: 'NZ'
  },
  {
    weather: {
      temp: 288.94,
      humidity: 98,
      current weather: "light rain"
    }
  }
  ]
}

const store = redux.createStore(reducer, state)

store.subscribe( () => {
  var state = store.getState
})

const url = "api.openweathermap.org/data/2.5/forecast/city?id=2179538&APPID=44237abc5b450fad36fefd2fca9535d5"

request
  .get(url)
  .end((err, res) => {
    if (err) {
      console.log("Cannot find weather", err)
    } else {
      store.dispatch({type: "GET_WEATHER", payload: res.body})
    }
  })


var main = document.querySelector('main')

render(<App name='weatherWorld' />, main)
console.log('welcome to weatherWorld')
