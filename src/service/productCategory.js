import axios from 'axios';
import CATEGORY from '../DTO/category';

export const getACategory = (categoryId)=>{
    return new Promise((resolve,reject) =>{
        axios.get('http://localhost:3001/product_categories/getProductCategory/'+categoryId).then((response)=>{
            if(response.status === 200){
                    let categoryObject = response.data;
                    resolve(new CATEGORY(categoryObject.categoryId,categoryObject.name));
            }
        }).catch((error) => {
            reject({error:error.message});
        });
    });
};

export const getAllProductCategories = ()=>{
    return new Promise((resolve,reject) =>{
        axios.get('http://localhost:3001/product_categories/getAllProductCategories').then((response)=>{
            if(response.status === 200){
                    let categoriesList = response.data;
                    let categoriesListTransformed = categoriesList.map(category => {
                            return new CATEGORY(category.categoryId,category.name);
                    });
                    resolve(categoriesListTransformed);
            }
        }).catch((error) => {
            reject({error:error.message});
        });
    });
}