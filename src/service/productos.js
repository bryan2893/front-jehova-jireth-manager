import axios from 'axios';

export const getProductos = () => {
        return new Promise((resolve,reject) => {
                axios.get('http://localhost:3001/productos/obtener_todos').then((response) => {
                        if(response.status === 200){
                                resolve(response.data);
                        }
                }).catch((error) => {
                        reject(new Error(error.message));
                });
        });
};

export const getCategorias = (id_producto) => {
        return new Promise((resolve,reject) => {
                axios.get('http://localhost:3001/productos/obtener_categorias/'+id_producto).then((response) => {
                        if(response.status === 200){
                                resolve(response.data);
                        }
                }).catch((error) => {
                        reject(new Error(error.message));
                });
        });
};

export const getProductsWithCategories = () => {
        return new Promise((resolve,reject) => {
                axios.get('http://localhost:3001/productos/obtener_con_categorias').then((response) => {
                        if(response.status === 200){
                                resolve(response.data);
                        }
                }).catch((error) => {
                        reject(new Error(error.message));
                });
        });
};