import { ActionTypes } from "../constants/actions-types";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  debugger;
  console.log("state", state);
  switch (action.type) {
    case ActionTypes.Add_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};
// // export const cartReducer=(state = initialState ,{type,payload})=>{
// //     debugger
// //     switch (type) {

// //         case ActionTypes.Add_TO_CART:
// //           return {...state,cartItems:payload};
// //         default:
// //             return state;
// //     }

// // }
