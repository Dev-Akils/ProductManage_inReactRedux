const initialState = []; // Initial state for the cart

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((item) => item.id === action.payload.id); // Check if the product exists
      if (exist) {
        // Update quantity if the item already exists
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 } // Increment the quantity
            : item
        );
      } else {
        // Add a new product to the cart
        return [...state, { ...action.payload, qty: 1 }];
      }

    case "DELITEM":
      const exist1 = state.find((item) => item.id === action.payload.id); // Check if the product exists
      if (exist1.qty === 1) {
        // Remove item if quantity is 1
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        // Decrease quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }

    default:
      return state; // Return unchanged state for unknown actions
  }
};

export default handleCart;
