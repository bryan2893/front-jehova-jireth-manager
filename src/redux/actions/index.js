import {SET_PRODUCT_TO_CALCULATOR, CLOSE_CALCULATOR, 
    ADD_FOOD_TO_CARTLIST, 
    DELETE_FOOD_FROM_CARTLIST, 
    UPDATE_TOTAL_COUNTER, CLEAN_SALES_WINDOW,CLOSE_ALERT,OPEN_ALERT} from '../constants/action-types';

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

export function updateTotalCounter(payload){
    return {type:UPDATE_TOTAL_COUNTER, payload};
}

export function cleanSalesWindow(payload){
    return {type:CLEAN_SALES_WINDOW, payload};
}

export function closeAlert(payload){
    return {type:CLOSE_ALERT, payload};
}

export function openAlert(payload){
    return {type:OPEN_ALERT, payload};
}