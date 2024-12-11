// Action to add an item to the cart
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product,
    };
  };
  
  // Action to remove an item from the cart
  export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product,
    };
  };
  