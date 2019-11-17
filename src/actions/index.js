/* eslint-disable import/prefer-default-export */
//Describe la accion a realizar y pasa un objeto al reducer
//para que ese tenga la logica de la accion a realizar
//Payload es la información que le vamo a transmitir
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});
