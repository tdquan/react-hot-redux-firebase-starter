import * as types from '../actions/actionTypes';

const initialState = {
  activeChatroom: {},
  // joinedChatrooms: [],
  // availableChatrooms: [],
  rooms: [],
  loading: false
};

export default function chatroomReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_CHATROOMS:
      return Object.assign({}, state, {
        rooms: action.payload,
        loading: false
      });
    case types.LOADING_CHATROOMS:
      return Object.assign({}, state, {
        loading: true
      });
    case types.SET_ACTIVE_ROOM:
      return Object.assign({}, state, {
        activeChatroom: action.payload
      });
    default:
      return state;
  }
}
