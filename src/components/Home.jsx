import React from "react";
import MacBook from "../assets/MacBook.jpg"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
    const productList =[
        { 
            name: "Mac Book", 
            price: 14000, 
            imgSrc: MacBook, 
            id: "hhsgjhsgjjasd"
        },
        { 
            name: "Pro Book", 
            price: 12000, 
            imgSrc: MacBook, 
            id: "andaksdjjd"
        }
    ]
    
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
    {
        productList.map(i=>(
            <ProductCard 
            key={i.id} 
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
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