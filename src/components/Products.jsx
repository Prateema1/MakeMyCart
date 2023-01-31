import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products")
    dispatch({type:"ADD_PRODUCTS", payload: data.products})
  };

  useEffect(() => {
    fetchProducts();
  }, [])
}

export default Product;