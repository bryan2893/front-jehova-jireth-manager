import { SET_PRODUCT_TO_CALCULATOR,
    CLOSE_CALCULATOR,ADD_FOOD_TO_CARTLIST,
    UPDATE_TOTAL_COUNTER,CLEAN_SALES_WINDOW,CLOSE_ALERT,
    OPEN_ALERT,HIDE_ALERT, SUBSTRACT_FOOD_TO_CARTLIST,SET_ACTUAL_FOOD_LIST,
    SET_PRODUCT_CATEGORIES,SET_HIGHLIGHTEDCATEGORYID,SET_CURRENT_PRODUCTS } from '../constants/action-types';

const initialState = {
    alert:{visibility:'0',reason:"",message:"",type:""},

    salesWindowState:{
        productShower:{
            highlightedCategoryId:null,
            productCategories:[],
            currentProducts:[]
        },

        calculator:{
            isOpen:false,
            foodObject:{},
        },

        shopingCartList:[],
        totalPurchase:0
    }
};

function rootReducer(state = initialState, action) {

    if (action.type === SET_PRODUCT_CATEGORIES) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{productShower:Object.assign({},state.salesWindowState.productShower,{productCategories:action.payload})})
        });
    }

    if (action.type === SET_HIGHLIGHTEDCATEGORYID) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{productShower:Object.assign({},state.salesWindowState.productShower,{highlightedCategoryId:action.payload})})
        });
    }

    if (action.type === SET_CURRENT_PRODUCTS) {
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{productShower:Object.assign({},state.salesWindowState.productShower,{currentProducts:action.payload})})
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

    if (action.type === ADD_FOOD_TO_CARTLIST) {
        let foodByPayload = action.payload;

        let findedFood = state.salesWindowState.shopingCartList.find((food)=> food.varietyId === foodByPayload.varietyId);
        
        //Si la comida con "x" id fue agregada entonces se le suma la cantidad solamente, sino se agrega completamente a la lista.
        if (!findedFood){
            return Object.assign({}, state, {
                salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:state.salesWindowState.shopingCartList.concat(action.payload)})
            });
        }else{

            let copyOfFoods = [...state.salesWindowState.shopingCartList];

            let fixedArray = copyOfFoods.map(function(food){
                if (food.varietyId === foodByPayload.varietyId){
                    return Object.assign({},food,{quantity:food.quantity + foodByPayload.quantity});
                }
                return Object.assign({},food);
            })

            return Object.assign({}, state, {
                salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:fixedArray})
            });
        }
    }

    if (action.type === SUBSTRACT_FOOD_TO_CARTLIST) {
        let foodByPayload = action.payload;

        let copyOfFoods = [...state.salesWindowState.shopingCartList];

        console.log("Entró al metodo substract_food_to_cartlist");
        let updatedArray = copyOfFoods.map(function(food){
            if (food.varietyId === foodByPayload.varietyId){
                console.log("Hizo match en varietyId");
                console.log("El objeto que encontró es éste "+ JSON.stringify(food));
                return Object.assign({},food,{quantity:food.quantity - 1});
            }
            return Object.assign({},food);
        })

        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{shopingCartList:updatedArray.filter(food => food.quantity > 0)})
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

    if(action.type === SET_ACTUAL_FOOD_LIST){
        return Object.assign({}, state, {
            salesWindowState: Object.assign({},state.salesWindowState,{actualFoodList:action.payload})
        });
    }

    return state;
};

export default rootReducer;