import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Menu from './Menu';
import PopularSongs from '../containers/popularSongsContainers';
import StylesList from './StylesList';
import Style from './Style';
import Song from './Song';
import AddSongContainer from '../containers/addSongsContainer';
import Cart from './Cart';

// - / (PopularSongs.js)
// - /styles (StylesList.js)
// - /styles/:styleName (Style.js)
// - /song/:songId (Song.js)
// - /add (AddSongContainer.js)
// - /cart (Cart.js)

export default function App() {
	return (
		<div>
			<Link to="/">
				<h1>Hit Parade</h1>
			</Link>
			<Menu />
			<Switch>
				<Route exact path="/">
					<PopularSongs />
				</Route>
				<Route exact path="/styles">
					<StylesList />
				</Route>
				<Route exact path="/styles/:styleName">
					<Style />
				</Route>
				<Route exact path="/song/:songId">
					<Song />
				</Route>
				<Route exact path="/add">
					<AddSongContainer />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
			</Switch>
		</div>
	);
}
