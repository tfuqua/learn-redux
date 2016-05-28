
function posts(state = [], action) {

  switch(action.type) {
    case 'INCREMENT_LIKES':
    const i = action.index
    return [
      ...state.slice(0,i), //before one we update
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1),
    ]

    //return updated state
    default:
      return state;
  }
}

export default posts;
