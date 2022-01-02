import { combineReducers } from 'redux'

import setCurrentCategoryReducer from './setCurrentCategoryReducer'
import setCurrentPageReducer from './setCurrentPageReducer'
import setMoviesPerPageReducer from './setMoviesPerPageReducer'


const rootReducer = combineReducers({
    setCurrentCategoryReducer,
    setCurrentPageReducer,
    setMoviesPerPageReducer
})

export default rootReducer