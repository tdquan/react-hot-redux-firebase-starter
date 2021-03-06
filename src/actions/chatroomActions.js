import * as firebase from 'firebase/firebase-browser';
import * as types from './actionTypes';

// Create a new chat room
export const createChatRoom = (name, userId) => dispatch => {
  const ref = firebase.database().ref('/chatrooms');
  const newRoom = ref.push();
  newRoom.set({ name: name, participants: [userId] });
  dispatch(loadChatRooms());
};

// Load chat rooms
export const loadChatRooms = () => dispatch => {
  dispatch(loadingChatRooms());
  const ref = firebase.database().ref('/chatrooms');
  ref
    .once('value')
    .then(snapshot => {
      let rooms = [];
      Object.keys(snapshot.val()).forEach(key => {
        rooms.push({
          name: snapshot.val()[key].name,
          uid: key,
          participants: snapshot.val()[key].participants
        });
      });
      dispatch({
        type: types.LOAD_CHATROOMS,
        payload: rooms
      });
    })
    .catch(err => console.log(err));
};

// Loading chat rooms
export const loadingChatRooms = () => {
  return {
    type: types.LOADING_CHATROOMS
  };
};

// Set active chat room
export const setActiveChatRoom = room => dispatch => {
  dispatch({
    type: types.SET_ACTIVE_ROOM,
    payload: room
  });
};
