import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

var main = document.querySelector('main')

render(<App name='weatherWorld' />, main)
console.log('welcome to weatherWorld')
