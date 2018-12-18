import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import gameReducers from './reducers/gameReducers';

const rootReducers = combineReducers({
  gameStore: gameReducers
})

export default createStore(
  rootReducers,
  applyMiddleware(thunk)
)