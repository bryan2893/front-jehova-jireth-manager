import { ADD_ARTICLE, SET_PRODUCT_TO_CALCULATOR,CLOSE_CALCULATOR } from '../constants/action-types';

//PRUEBA
import {getFoods} from '../../service/food';

const initialState = {
    salesWindowState:{
        filter:"",
        actualFoodList:getFoods(),
        calculator:{
            isOpen:false,
            foodObject:{},
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
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{calculator:{isOpen:true,foodObject:action.payload}})
        });
    }

    if (action.type === CLOSE_CALCULATOR) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{calculator:{isOpen:false,foodObject:{}}})
        });
    }
    
    return state;
};

export default rootReducer;