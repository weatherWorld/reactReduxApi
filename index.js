import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import clone from 'clone'
import request from 'superagent'
import App from './components/app'
import reducer from './reducer/reducer'

const initialState = {
 city: [{
   name: 'Wellington',
   country: 'NZ'
 },
 {
   weather: {
     temp: 288.94,
     humidity: 98,
     currentWeather: "light rain"
   }
 }
 ]
}

const store = createStore(reducer, initialState)

store.subscribe( () => {
  var state = store.getState
})

const cities = [2179538]

function getWeather(cities){
  for(var i=0; i < cities.length; i++) {
    const url = "http://api.openweathermap.org/data/2.5/forecast/city?id="+cities[i]+"&APPID=44237abc5b450fad36fefd2fca9535d5"
    request
    .get(url)
    .end((err, res) => {
      if (err) {
        return err
      } else {
        store.dispatch({type: "GET_WEATHER", payload: res.body})
      }
    })
  }
}

var main = document.querySelector('main')

render(<App name='weatherWorld' />, main)
console.log('welcome to weatherWorld')

export default getWeather
