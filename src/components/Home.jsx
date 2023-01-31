import React from "react";
import Products from "./Products";
import MacBook from "../assets/MacBook.jpg"
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    <Products />
    const { products } = useSelector((state) => state.product);
    console.log(products, "PRODUCTS")
    const dispatch = useDispatch();
    
    const addToCartHandler = (options) => {
        dispatch({type:"addToCart", payload:options})
        dispatch({
            type: "calculatePrice"
          })
        toast.success("Added to cart");
    };

  return (
    <div className="home">
    <Products />
    {
        products.map((prod)=>(
            <ProductCard 
            key={prod.id} 
            imgSrc={prod.thumbnail}
            name={prod.title}
            price={prod.price}
            id={prod.id}
            handler={addToCartHandler}
            />
        ))
    }
    </div>
  )
};

const ProductCard = ({name, id, price, handler, imgSrc}) => (
    <div className="productCard">
    <img src={imgSrc} alt={name}  />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name, price, id, quantity: 1, imgSrc})}>Add to Cart</button>
    </div>
)
export default Home