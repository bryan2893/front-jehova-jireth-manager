import axios from 'axios';

export const login = (workerId,password)=>{
    return axios.post('http://localhost:3001/auth/getWorker',{workerId: workerId,password: password});
};

export const getCategoriesById = (categoryId)=>{
    return axios.get('http://localhost:3001/product_categories/getProductCategory/'+categoryId);
};

export const getAllProductCategories = ()=>{
    return axios.get('http://localhost:3001/product_categories/getAllProductCategories');
}