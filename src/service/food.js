import hamburguesa from '../test-images/hamburguesa.png';
import taco from '../test-images/taco.png';

let foodList = [{id:1,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:2,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:3,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:4,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:5,name:"Taco sencillo",image:taco,price:1200,categoryId:1},
        {id:6,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:7,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:8,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:9,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:10,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:11,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:12,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:13,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:2},
        {id:14,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:3},
        {id:15,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:3},
        {id:16,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:3},
        {id:17,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:18,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:19,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:20,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:21,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:22,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:23,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1},
        {id:24,name:"Hamburguesa con papas",image:hamburguesa,price:1700,categoryId:1}];

let getFoods = () => {
        return foodList;
};

//Obtiene las comidas con "x" categoría.
const getFoodsByCategory = function(catergoryId){

        let updatedArray = foodList.filter((food) => food.categoryId === catergoryId);

        return updatedArray;
};

export {getFoods,getFoodsByCategory}