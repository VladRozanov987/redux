import axios from "axios";
import { popularGamesUrl } from "../api";

// Action creator
// const fetchGames = () => {
//   return {
//     type: "FRTCH_GAMES",
//   };
// };

export const loadGames = () => async (dispatch) => {
  //Frtch axios
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
    },
  });
};
