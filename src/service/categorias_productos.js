import axios from 'axios';

export const getCategorias = () => {
        return new Promise((resolve,reject) => {
                axios.get('http://localhost:3001/categorias_producto/obtener_todos').then((response) => {
                        if(response.status === 200){
                                resolve(response.data);
                        }
                }).catch((error) => {
                        reject(new Error(error.message));
                });
        });
};