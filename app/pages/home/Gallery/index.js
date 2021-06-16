import Gallery from './component';
import { connect } from 'react-redux';
import { loadMovieList } from 'common/actions';

const mapStateToProps = (state) => ({
    movies: state.app.movies,
    dataLoaded: state.app.movies.length > 0,    
})

const mapDispatchToProps = dispatch => ({
    loadData: () => {
      dispatch(loadMovieList());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);