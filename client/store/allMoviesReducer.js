import axios from 'axios'

const initialState = {
  movieList: []
}

export const LIST_MOVIES = 'LIST_MOVIES'

export function listMovies(data) {
  return {type: LIST_MOVIES, data}
}

export default function allMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_MOVIES:
      console.log('HIT')
      return {...state, movieList: action.data}
    default:
      return state
  }
}

export function listMoviesThunk() {
  // Add your thunk creator here.
  return async dispatch => {
    try {
      console.log('hellooo')
      const {data} = await axios.get('/api/movies')
      console.log('$$$$$$', data)
      dispatch(listMovies(data))
    } catch (error) {
      dispatch(listMoviesThunk(error))
    }
  }
}
