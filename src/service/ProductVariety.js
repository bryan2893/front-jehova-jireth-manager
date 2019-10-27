import axios from 'axios';
import VARIETY from '../DTO/variety';

export const getProductVarietiesOfAproduct = (productId)=>{
    return new Promise((resolve,reject) =>{
        axios.get('http://localhost:3001/product_variety/getVarietiesOfAproduct/' +productId).then((response)=>{
            if(response.status === 200){
                    let productVarieties = response.data;
                    let productVarietiesTransformed = productVarieties.map(variety => {
                            return new VARIETY(variety.varietyId,variety.productId,variety.name,variety.price);
                    });
                    resolve(productVarietiesTransformed);
            }
        }).catch((error) => {
            reject({error:error.message});
        });
    });
}