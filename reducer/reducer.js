// import clone from 'clone'
const clone = require ('clone')

function reducer(state, action){
  let newState = clone(state)

  switch (action.type) {
<<<<<<< HEAD
    case 'INIT':
      return newState

    case 'GOT_WEATHER':
      newState.city = action.payload
      console.log("new state from 'GOT_WEATHER' reducer", newState)
=======
    case 'GET_WEATHER':
      newState.city = action.payload
>>>>>>> master
      return newState

    default:
      return newState

  }
}

module.exports = reducer
