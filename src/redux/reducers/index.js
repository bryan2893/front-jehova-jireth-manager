import { ADD_ARTICLE, SET_PRODUCT_TO_CALCULATOR } from '../constants/action-types';

//PRUEBA
import {getFoods} from '../../service/food';

const initialState = {
    salesWindowState:{
        filter:"",
        actualFoodList:getFoods(),
        calculator:{
            isOpen:true,
            foodObject:null,
        }
    },
    articles: []
};

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === SET_PRODUCT_TO_CALCULATOR) {
        //Agregar funcionalidad para agregar producto a la calculadora.

        return Object.assign({}, state, {
            salesWindowState: state.articles.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;