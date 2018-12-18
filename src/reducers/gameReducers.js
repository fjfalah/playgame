import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  games: [],
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        isLoading: true
      }
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
        isLoading: false

      }
    case GET_GAMES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}