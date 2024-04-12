import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, } from "react-redux"
import { setProducts } from "../redux/actions/product-actions";
import ProductComponent from "./ProductComponent";

const ProductsPage = () => {
    const dispatch = useDispatch();

    const fetchProdcuts = async () => {
        console.log("ERROR");
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log('ERR', err);
        })
        console.log(response);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        console.log("THIS IS ERRO");
        fetchProdcuts();
    }, [])

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}


export default ProductsPage;