import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSong} from '../actions'
import styled from 'styled-components';

const FormStyles = styled.form`
	display: grid;
	grid-template-columns: 300px;
	gap: 10px;
	input,
	select,
	textarea {
		height: 30px;
		background: #bae8e8;
		border: none;
		padding: 0 1rem;
		border-radius: 5px;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #272343;
		opacity: 1; /* Firefox */
	}
`;

export default function AddSong({
  setTitle,
  setArtist,
  setPrice,
  setStyle,
  setLyrics,
  title,
  artist,
  price,
  style,
  lyrics}) {

  const styles = useSelector(state => state.styles)
  const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		const newSong = {
			id: Date.now(),
			title: title,
			artist: artist,
			price: price,
			style: style,
			lyrics: lyrics,
			upvotes: 0,
			downvotes: 0,
			isFavorited: false,
		};
		dispatch(addSong(newSong))  ;
		// reset the form... TODO: find a more elegant way.
		setTitle('');
		setArtist('');
		setPrice(0);
		setStyle('');
		setLyrics('');
	}


	return (
		<div>
			<h1>🌚 Add a new song</h1>
			<FormStyles onSubmit={handleSubmit}>
				<input
					placeholder="Title"
					required
					value={title}
					onChange={e => {
            if(setStyle) {
            setTitle(e.currentTarget.value)}
          }}
				/>
				<input
					placeholder="Artist"
					required
					value={artist}
					onChange={e => setArtist(e.currentTarget.value)}
				/>
				<input
					placeholder="Price"
					required
					value={price}
					onChange={e => setPrice(e.currentTarget.value)}
				/>
				<select required value={style} onChange={e => setStyle(e.currentTarget.value)}>
					{/* generate the styles from the context style array */}
					{styles.map(style => (
						<option key={style} value={style}>
							{style}
						</option>
					))}
				</select>
				<textarea
					required
					placeholder="Lyrics"
					value={lyrics}
					onChange={e => setLyrics(e.currentTarget.value)}
				/>
				<button>Add</button>
			</FormStyles>
		</div>
	);
}
