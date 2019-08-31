import {ADD_ARTICLE,SET_PRODUCT_TO_CALCULATOR, CLOSE_CALCULATOR} from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function setProductToCalculator(payload){
    return {type: SET_PRODUCT_TO_CALCULATOR, payload}
};

export function closeCalculator(payload){
    return {type: CLOSE_CALCULATOR, payload}
};