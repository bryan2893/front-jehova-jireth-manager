import React,{useState,useEffect} from 'react';
import {getProductsWithCategories} from '../../service/productos';
import '../Menu/Menu.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SubToolBar from '../SubToolBar/SubToolBar';
import TableData from '../TableData/TableData';

let foodListSaved = [];

const Menu = ({history}) => {

    const [foodsList,setFoodsList] = useState([]);

    useEffect(() => {

        getProductsWithCategories().then((data) => {
            let {productos} = data;
            let modifiedProductsList = productos.map((product) => {
                let object = {};
                object.id_producto = product.id_producto;
                object.nombre = product.nombre;
                object.precio = product.precio;
                object.categorias = product.categorias;
                //object.categorias = product.categorias;
                return object;
            });

            foodListSaved = modifiedProductsList.slice();
            console.log(modifiedProductsList);
            setFoodsList(modifiedProductsList);

        }).catch((error) => {

        });

    },[]);

    const [tagsList,setTagsList] = useState([]);

    function onSearchBarKeyUpHandle(event){
        const searchBarValue = event.target.value;
        if(searchBarValue.length === 0){
            setFoodsList(foodListSaved);
        }else{
            let productsListCopy = foodListSaved.slice();
            let newProductsList = productsListCopy.filter((product) => {
                return product.nombre.search(searchBarValue) !== -1;
            });
            setFoodsList(newProductsList);
        }
    }

    function onCategorySelectChangeHandle(event){
        const selectedValue = event.target.value;
        alert(selectedValue);
        /*
        if(selectedValue.length === 0){
            setFoodsList(foodListSaved);
        }else{
            let productsListCopy = foodListSaved.slice();
            let newProductsList = productsListCopy.filter((product) => {
                return product.nombre.search(searchBarValue) !== -1;
            });
            setFoodsList(newProductsList);
        }
        */
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col s5 m9 Menu-fixed-window">
                    <NavigationBar goBack={history.goBack}/>

                    <SubToolBar 
                    onKeyUpSearchBar = {onSearchBarKeyUpHandle} 
                    onCategorySelect={onCategorySelectChangeHandle}/>

                    <div className="Menu-table-container">
                        <TableData headersList={['Nombre','Precio','Accion']} dataList = {foodsList} keyName="id_producto"/>
                    </div>
                </div>
                <div className="col s7 m3">
                    <h3 style={{textAlign:'center'}}>Etiquetas asociadas</h3>

                    {
                        tagsList.map((tag) => {
                            return (
                                <div className="chip" key={tag.id_categoria}>
                                    {tag.nombre}
                                    <i className="close material-icons">close</i>
                                </div>
                            );
                        })
                    }
                
                </div>
            </div>
            <div className="Menu-floating-button">
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
        </React.Fragment>
    );
}

export default Menu;