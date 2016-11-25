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
   temp: 27,
   description: 'light rain'
 },
 {
   name: 'Christchurch',
   temp: 24,
   description: 'sunny'
 },
 {
   name: 'Auckland',
   temp: 12,
   description: 'snow'
 }
]
}

const store = createStore(reducer, initialState)

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<App name='WeatherWorld' getWeather={getWeather} state={state} />, main)
})

function getWeather(){
  const cities = [2179538, 1053507, 6547384, 2853773, 2138410, 3523127, 1727087, 3146160, 4676032, 4160100, 4235766, 4389658, 3124963, 3176441, 7839404, 2766495, 5059836, 7290568, 158179, 6551604, 2511091, 6440879, 3176438]
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

store.dispatch({type:'INIT'})

console.log('welcome to weatherWorld')

export default getWeather
