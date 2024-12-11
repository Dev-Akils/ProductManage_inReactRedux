import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import {addCart,delCart} from '../redux/action/index'
import { useDispatch } from "react-redux";
function Product() {
 
const dispatch = useDispatch();





  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, []);




  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} width={300} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
const handleAddToCart=(product)=>{
    dispatch(addCart(product));
};
const handleRemoveFromCart=(product)=>{
    dispatch(delCart(product));
}
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
            </p>
            <i className="fa fa-start"></i>
          </h4>

          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button onClick={()=>handleAddToCart(product)} className="btn btn-outline-dark px-4 py-2 ms-2">
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;
