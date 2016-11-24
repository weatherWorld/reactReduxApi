import clone from 'clone'

function reducer(state, action){
  const newState = clone(state)

  switch (action.type) {
    case 'GET_WEATHER':
      newState.cities = action.payload
      return newState

    default:
      return newState

  }
}

export default reducer
