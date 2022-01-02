export const mapStateToProps = state => {
    return {
        currentCategory: state.setCurrentCategoryReducer,
        currentPage: state.setCurrentPageReducer
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        setCurrentPageReducer: (currentPage) => dispatch({ type: 'SET_CURRENT_PAGE', currentPage})
    }
}