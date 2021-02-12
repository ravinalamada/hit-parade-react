import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { SongPreview } from './Style';
import { AiOutlineArrowLeft } from 'react-icons/Ai';
// import { songs } from '../actions';

 function Song({songs}) {
	const { songId } = useParams();
	const history = useHistory();

	const song = songs.find(song => song.id == songId);

	return (
		<div>
			<h1>
				<AiOutlineArrowLeft onClick={() => history.goBack()} />
				{song?.artist} - {song?.title}
			</h1>
			<SongPreview>
				<h3>Lyrics</h3>
				{song?.lyrics}
			</SongPreview>
		</div>
	);
}

export default connect((state) =>({songs: state.songs}))(Song)
