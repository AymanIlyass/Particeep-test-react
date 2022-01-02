import { SET_CURRENT_PAGE } from '../actions/types'

function setCurrentPageReducer(state=1, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return action.currentPage
        default:
            return state
    }
}

export default setCurrentPageReducer