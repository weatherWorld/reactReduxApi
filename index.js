import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import clone from 'clone'
import request from 'superagent'
import App from './components/app'
import reducer from './reducer/reducer'

const initialState = {
 cities: [{
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

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState
  render(<App name='WeatherWorld' getWeather={getWeather} />, main)
})


function getWeather(){
  const cities = [2179538]
  for(var i=0; i < cities.length; i++) {
    const url = "http://api.openweathermap.org/data/2.5/forecast/city?id="+cities[i]+"&APPID=44237abc5b450fad36fefd2fca9535d5"
    request
    .get(url)
    .end((err, res) => {
      if (err) {
        return err
      } else {
        console.log('this is the response in index.js:', res.body)
        store.dispatch({type: "GET_WEATHER", payload: res.body})
      }
    })
  }
}

store.dispatch({type:'INIT'})


console.log('welcome to weatherWorld')

export default getWeather
