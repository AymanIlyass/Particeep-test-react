import { SET_CURRENT_PAGE } from '../types'

export default function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}