import { combineReducers } from 'redux';
import songsData from '../songsData.json';

const initialState = {
  songs: [songsData],
  isFavorited: false,
  upVote: 0,
  downVotes: 0,
}
export function songs(state=songsData, action) {
  switch(action.type) {
    case 'SONGS':
      return action.payload;
    case 'UP_VOTE_SONG':
      const updatedSongs = state.map(song => {
            if (song.id === action.payload.id) {
              return {
                ...song,
                upvotes: song.upvotes + 1,
              };
            }
            return song;
          });
          console.log(updatedSongs);
          return updatedSongs;
    default:
      return state;
  }
}

export function cartItems(state=[], action) {
  switch(action.type) {
    case '':
    default:
      return state;
  }
}

export function styles(state=[], action) {
  switch(action.type) {
    case '':
    default:
      return state;
  }
}


export const reducers = combineReducers({
  songs,
  cartItems,
  styles,
})
