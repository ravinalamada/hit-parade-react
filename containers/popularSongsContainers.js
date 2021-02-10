import {connect} from 'react-redux';
import PopularSongs from '../components/PopularSongs';

function mapStateToProps(state){
  return {
      songs: state.songs
  }
}

export default connect(mapStateToProps, null)(PopularSongs)
