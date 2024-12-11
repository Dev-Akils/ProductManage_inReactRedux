import React from "react";
import { useSelector ,useDispatch
} from "react-redux";
import { addCart,delCart } from "../redux/action";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();


  const handleAddToCart=(product)=>{
    dispatch(addCart(product));
};

  const handleRemoveFromCart = (item) => {
    dispatch(delCart(item)); // Dispatch the delCart action with the item as payload
  };
  return (
    <div className="container mt-4">
      <h1 className="h2 mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center  border-bottom py-4"
            >
              <img
                src={item.image}
                className="border p-2 me-3"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="flex-grow-1">
                <h2 className="h5">{item.title}</h2>
                <p className="text-muted mb-1">Price: ${item.price}</p>
                <p className="text-muted">Quantity: {item.qty}</p>
                <div className="d-flex px-3 align-items-center">
                  <button
                    className="btn btn-dark p-2 me-2 d-flex justify-content-center align-items-center"
                    style={{ width: "30px", height: "30px", fontSize: "18px" }}
                   onclick={()=>handleAddToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-dark p-2 d-flex justify-content-center align-items-center"
                    style={{ width: "30px", height: "30px", fontSize: "18px" }}
                    onClick={()=>handleRemoveFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div>
                <p className="fw-bold mb-0">Total: ${item.price * item.qty}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
