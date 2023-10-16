import CartActionTypes from "./action-type";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CartActionTypes.ADD_PRODUCT:
    //   //verificar se o produto esta no carrinho
    //   const productIsAlreadyInCart = state.products.some(
    //     (product) => product.id === action.payload.id
    //   );

    //   // se ele estiver, aumentar a sua quantidade em 1
    //   if (productIsAlreadyInCart) {
    //     return {
    //       ...state,
    //       products: state.products.map((product) =>
    //         product.id === action.payload.id
    //           ? { ...product, quantity: product.quantity + 1 }
    //           : product
    //       ),
    //     };
    //   }

    //   // se ele não estiver, adicioná-lo

    //   return {
    //     ...state,
    //     products: [...state.products, { ...action.payload, quantity: 1 }],
    //   };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    // case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
    //   return {
    //     ...state,
    //     products: state.products.map((product) =>
    //       product.id === action.payload
    //         ? { ...product, quantity: product.quantity + 1 }
    //         : product
    //     ),
    //   };

    // case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
    //   return {
    //     ...state,
    //     products: state.products
    //       .map((product) =>
    //         product.id === action.payload
    //           ? { ...product, quantity: product.quantity - 1 }
    //           : product
    //       )
    //       .filter((product) => product.quantity > 0),
    //   };

    //   return {
    //     ...state,
    //     products: [...state.products, action.payload],
    //   };
    default:
      return state;
  }
};

export default cartReducer;
