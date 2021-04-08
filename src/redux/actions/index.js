import { CHANGE_NICKNAME, GET_STREAMER_DATA, GET_STREAMERS } from "../constants";
import axios from 'axios'

export const changeNickname = (nickname) => ({
  type: CHANGE_NICKNAME,
  value: nickname,
});

const _baseUrl = "http://localhost:4000";

const getStreamerData = (data) => ({
  type: GET_STREAMER_DATA,
  value: data
})

export const getData = (nickname) => dispatch => {
  console.log(nickname);
  axios.get(`${_baseUrl}/getData?streamerNickname=${nickname}`)
  .then(response => dispatch(getStreamerData(response.data)))
  .catch(err => {
   console.log(err)
  })
};

const getClicks = async (url) => {
  const response = await fetch(
    `http://localhost:4000/bitlyUrl?bitlyUrl=${url}`
  );
  return await response.json();
};

const setNicknames = (data) => ({
  type: GET_STREAMERS,
  value: data
})

export const getNicknames = () => dispatch => {
  axios.get(`${_baseUrl}/getNickname`)
  .then((response) => dispatch(setNicknames(response.data.nickname)));
}
