import { SET_PRODUCT_TO_CALCULATOR,
    CLOSE_CALCULATOR,ADD_FOOD_TO_CARTLIST,
    DELETE_FOOD_FROM_CARTLIST,
    UPDATE_TOTAL_COUNTER,CLEAN_SALES_WINDOW,CLOSE_ALERT,
    OPEN_ALERT,HIDE_ALERT } from '../constants/action-types';

//PRUEBA
import {getFoods} from '../../service/food';

const initialState = {
    alert:{visibility:'0',reason:"",message:"",type:""},

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

    if(action.type === UPDATE_TOTAL_COUNTER){
        let totalAmount = 0;
        let ShopingList = state.salesWindowState.shopingCartList;
        for(let i = 0; i < ShopingList.length; i++){
            let foodItem = ShopingList[i];
            totalAmount += foodItem.price * foodItem.quantity;
        }
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{totalPurchase:totalAmount})
        });
    }

    if(action.type === CLEAN_SALES_WINDOW){
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{filter:"",allFoods:[],shopingCartList:[],totalPurchase:0,calculator:{isOpen:false,foodObject:{}}})
        });
    }

    if(action.type === CLOSE_ALERT){
        return Object.assign({}, state, {
            alert: Object.assign({},state.alert,{visibility:'0'})
        });
    }

    if(action.type === OPEN_ALERT){
        return Object.assign({}, state, {
            alert: {visibility:action.payload.visibility,reason:action.payload.reason,message:action.payload.message,type:action.payload.type}
        });
    }

    if(action.type === HIDE_ALERT){
        return Object.assign({}, state, {
            alert: Object.assign({},state.alert,{type:"hidden"})
        });
    }
        
    return state;
};

export default rootReducer;