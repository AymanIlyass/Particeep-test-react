import { SET_CURRENT_CATEGORY } from '../actions/types'

function setCurrentCategoryReducer(state='all', action) {
    switch (action.type) {
        case SET_CURRENT_CATEGORY:
            return action.currentCategory
        default:
            return state
    }
}

export default setCurrentCategoryReducer