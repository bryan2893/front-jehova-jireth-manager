import { SET_PRODUCT_TO_CALCULATOR,CLOSE_CALCULATOR,ADD_FOOD_TO_CARTLIST } from '../constants/action-types';

//PRUEBA
import {getFoods} from '../../service/food';

const initialState = {
    salesWindowState:{
        filter:"",
        allFoods:[],
        actualFoodList:getFoods(),
        calculator:{
            isOpen:false,
            foodObject:{},
        },
        shopingCartList:[]
    }
};

function rootReducer(state = initialState, action) {

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

    if (action.type === ADD_FOOD_TO_CARTLIST) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:state.salesWindowState.shopingCartList.concat(action.payload)})
        });
    }
    
    return state;
};

export default rootReducer;