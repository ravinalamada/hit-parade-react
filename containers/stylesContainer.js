import {connect} from 'react-redux';
import Styles from '../components/Style';

function mapStateToProps(state){
  return {
      song: state.songs
  }
}

export default connect(mapStateToProps, null)(Styles)
