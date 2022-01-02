import { SET_CURRENT_CATEGORY } from '../types'

export default function setCurrentCategory(currentCategory) {
    return {
        type: SET_CURRENT_CATEGORY,
        currentCategory
    }
}