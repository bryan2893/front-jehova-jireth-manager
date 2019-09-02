import {SET_PRODUCT_TO_CALCULATOR, CLOSE_CALCULATOR, ADD_FOOD_TO_CARTLIST, DELETE_FOOD_FROM_CARTLIST} from '../constants/action-types';

export function setProductToCalculator(payload){
    return {type: SET_PRODUCT_TO_CALCULATOR, payload}
};

export function closeCalculator(payload){
    return {type: CLOSE_CALCULATOR, payload}
};

export function addFoodToCartList(payload){
    return {type: ADD_FOOD_TO_CARTLIST, payload}
};

export function deleteFoodFromCartList(payload){
    return {type: DELETE_FOOD_FROM_CARTLIST, payload}
};