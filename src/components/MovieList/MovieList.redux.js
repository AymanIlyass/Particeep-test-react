export const mapStateToProps = state => {
    return {
        currentCategory: state.setCurrentCategoryReducer,
        moviesPerPage: state.setMoviesPerPageReducer,
        currentPage: state.setCurrentPageReducer
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        setCurrentCategoryReducer: (currentCategory) => dispatch({ type: 'SET_CURRENT_CATEGORY', currentCategory}),
        setCurrentPageReducer: (currentPage) => dispatch({ type: 'SET_CURRENT_PAGE', currentPage})
    }
}