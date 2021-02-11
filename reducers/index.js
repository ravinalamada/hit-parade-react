import { combineReducers } from 'redux';
import songsData from '../songsData.json';
import { defineState } from 'redux-localstore'

const initialSongs = {
  title: '',
  artist: '',
  price: 0,
  style: '',
  lyrics: '',
}

const initialStyles = ['Pop', 'Salegy', 'Reggae', 'Rock', 'Folk', 'Rap']

export function songs(state=songsData, action) {
  switch(action.type) {
    case 'SONGS':
      return action.payload;
    case 'FAVORITE_SONGS':
      const favoritedSongs = state.map(song => {
        if (song.id === action.payload) {
          return {
            ...song,
            isFavorited: !song.isFavorited,
          };
        }
        return song;
      });
      return favoritedSongs
    case 'UP_VOTE_SONG':
      const updatedSongs = state.map(song => {
            if (song.id === action.payload) {
              return {
                ...song,
                upvotes: song.upvotes + 1,
              };
            }
            return song;
          });
          return updatedSongs;
    case 'DOWN_VOTE_SONG':
      const dounVotesSong = state.map(song => {
            if (song.id === action.payload) {
              return {
                ...song,
                downvotes: song.downvotes + 1,
              };
            }
            return song;
          });
          return dounVotesSong;
          case 'ADD_SONG':
      return [...state, action.payload]
          default:
      return state;
  }
}

export function addNewSongs(state= initialSongs, action) {
  switch(action.type) {
    case 'SET_TITLE':
      return {...state, title: action.payload}
    case 'SET_ARTIST':
      return {...state, artist: action.payload};
    case 'SET_PRICE':
      return {...state, price: action.payload};
    case 'SET_STYLE':
      return {...state, style: action.payload};
    case 'SET_LYRICS':
      return {...state, lyrics: action.payload}
    default:
       return state;
  }
}

export function cartItems(state=[], action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
    case 'REMOVE_CART_ITEM':
		  return state.filter(cartItem => cartItem.id !== action.payload)
    case 'EMPTY_CART':
      return []
    default:
      return state;
  }
}

export function styles(state=initialStyles, action) {
  switch(action.type) {
    case 'STYLES':
      return action.payload
    default:
      return state;
  }
}


export const reducers = combineReducers({
  songs,
  cartItems,
  styles,
  addNewSongs,
})

