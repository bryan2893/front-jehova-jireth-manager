import { ADD_ARTICLE } from '../constants/action-types';

//PRUEBA
import {getFoods} from '../../service/food';

const initialState = {
    salesWindowState:{
        filter:"",
        actualFoodList:getFoods()
    },
    articles: []
};

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;