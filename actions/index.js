export function songs(song) {
  return {
    type: 'SONGS',
    payload: song
  }
}
export function favoriteSong(songId) {
  return {
    type: 'FAVORITE_SONGS',
    payload: songId
  }
}

export function upvoteSong(songId) {
  return {
    type: 'UP_VOTE_SONG',
    payload: songId
  }
}

export function downvoteSong(songId) {
  return {
    type: 'DOWN_VOTE_SONG',
    payload: songId
  }
}

export function addToCart(song) {
  return {
    type: 'ADD_TO_CART',
    payload: song
  }
}

export function addSong(song) {
  return {
    type: 'ADD_SONG',
    payload: song
  }
}

export function removeCartItem(songId) {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: songId
  }
}

export function emptyCart() {
  return {
    type: 'EMPTY_CART'
  }
}
