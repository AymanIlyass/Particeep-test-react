export const mapStateToProps = state => {
    return {
        moviesPerPage: state.setMoviesPerPageReducer,
    }
}