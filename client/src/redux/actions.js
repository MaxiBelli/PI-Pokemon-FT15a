import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: "GET_POKEMONS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_TYPES",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addPokemon(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      console.log(response);
      return{
        type: "POST_POKEMON",
        response,
      };
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var res = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function filterPokemonsByOrigin(payload) {
  return {
    type: "FILTER_BY_ORIGIN",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}