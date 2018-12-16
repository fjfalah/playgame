import {
    GET_GAMES,
    GET_GAMES_SUCCESS,
    GET_GAMES_ERROR
} from '../constants/actionTypes'
import Axios from 'axios';

export const getGamesAction = () => {
    return(dispatch) => {
        Axios.get('https://api.playgame.com/v1/games?offset=0&limit=100')
            .then((res) => {
                dispatch({
                    type: GET_GAMES_SUCCESS,
                    payload: res.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_GAMES_ERROR,
                    payload: error
                })
            })
    }
}