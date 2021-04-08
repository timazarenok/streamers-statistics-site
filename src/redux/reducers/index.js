import {
  CHANGE_NICKNAME,
  GET_STREAMERS,
  GET_STREAMER_DATA,
} from "../constants";

const initialState = {
  nickname: "Defloot",
  streamerData: {},
  streamers: [],
};

const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NICKNAME:
      return { ...state, nickname: action.value, streamerData: [] };
    case GET_STREAMERS:
      return { ...state, streamers: action.value };
    case GET_STREAMER_DATA:
      return { ...state, streamerData: action.value };
    default:
      return state;
  }
};

export default UserDataReducer;
