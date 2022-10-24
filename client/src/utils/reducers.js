import { useReducer } from "react";
import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  DELETE_GAME
} from "./mutations";

export const reducer = (state, action) => {
  switch (action.type) {
  
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case DELETE_GAME:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };


    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}