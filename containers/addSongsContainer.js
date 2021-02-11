import {connect} from 'react-redux';
import addSong from '../components/AddSong';
import {setTitle, setArtist, setPrice, setStyle, setLyrics} from '../actions/index'

const mapToDispatch = {
  setTitle,
  setArtist,
  setPrice,
  setStyle,
  setLyrics
}

function mapStateToProps(state){
  return {
    title: state.addNewSongs.title,
    artist: state.addNewSongs.artist,
    price: state.addNewSongs.price,
    style: state.addNewSongs.style,
    lyrics: state.addNewSongs.lyrics,
  }
}

export default connect(mapStateToProps, mapToDispatch)(addSong)
