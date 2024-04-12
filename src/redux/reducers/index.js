import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./product-reducers";


const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer
})

export default reducers;