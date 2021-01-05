import axios from 'axios';

export const getProductos = () => {
        return new Promise((resolve,reject) => {
                axios.get('http://localhost:3001/productos/obtener_todos').then((response) => {
                        if(response.status === 200){
                                resolve(response.data.productos);
                        }
                }).catch((error) => {
                        reject(new Error(error.message));
                });
        });
};