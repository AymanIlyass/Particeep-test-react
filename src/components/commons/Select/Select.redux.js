export const mapDispatchToProps = dispatch => {
    return {
        setCurrentCategoryReducer: (currentCategory) => dispatch({ type: 'SET_CURRENT_CATEGORY', currentCategory}),
        setMoviesPerPageReducer: (moviesPerPage) => dispatch({ type: 'SET_MOVIES_PER_PAGE', moviesPerPage})
    }
}