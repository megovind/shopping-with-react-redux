import { ActionTypes } from '../constants/actions-types';

const initialState = {
    products: [],
    product: {}
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}


export const selectedProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        default:
            return state;
    }
}