import clone from 'clone'

function reducer(state, action){
  const newState = clone(state)

  switch (action.type) {
    case 'GET_WEATHER':
      newState.cities = action.payload.cities
      return newState

    default:
      return newState

  }
}

module.exports = reducer
