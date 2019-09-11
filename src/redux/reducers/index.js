import { SET_PRODUCT_TO_CALCULATOR,CLOSE_CALCULATOR,ADD_FOOD_TO_CARTLIST,DELETE_FOOD_FROM_CARTLIST } from '../constants/action-types';

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
        shopingCartList:[],
        totalPurchase:0
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
        let foodByPayload = action.payload;

        let findedFood = state.salesWindowState.shopingCartList.find((food)=> food.id === foodByPayload.id);
        
        //Si la comida con "x" id fue agregada entonces se le suma la cantidad solamente, sino se agrega completamente a la lista.
        if (!findedFood){
            return Object.assign({}, state, {
                salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:state.salesWindowState.shopingCartList.concat(action.payload)})
            });
        }else{

            let copyOfFoods = [...state.salesWindowState.shopingCartList];

            let fixedArray = copyOfFoods.map(function(food){
                if (food.id === foodByPayload.id){
                    return Object.assign({},food,{quantity:food.quantity + foodByPayload.quantity});
                }
                return Object.assign({},food);
            })

            return Object.assign({}, state, {
                salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:fixedArray})
            });
            
        }
    }

    if (action.type === DELETE_FOOD_FROM_CARTLIST) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:state.salesWindowState.shopingCartList.filter(food => food.id !== action.payload)})
        });
    }
        
    return state;
};

export default rootReducer;