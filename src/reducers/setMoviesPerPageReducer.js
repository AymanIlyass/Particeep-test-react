import { SET_MOVIES_PER_PAGE } from '../actions/types'

function setMoviesPerPageReducer(state=8, action) {
    switch (action.type) {
        case SET_MOVIES_PER_PAGE:
            return action.moviesPerPage
        default:
            return state
    }
}

export default setMoviesPerPageReducer