import React,{useState,useEffect} from 'react';
import {getProductos} from '../../service/productos';
import '../Menu/Menu.css';
import M from 'materialize-css';

const Menu = () => {

    const [foodsList,setFoodsList] = useState([]);

    useEffect(() => {
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.init(elems);
        getProductos().then((listaProductos) => {
            setFoodsList(listaProductos);
        }).catch((error) => {
        });

    },[]);

    const [tagsList,setTagsList] = useState([]);

    function handleOnRowClicked(something){
        setTagsList([{id:1,nombre:'Hamburguesa'},{id:2,nombre:'Tacos'},{id:3,nombre:'Refrescos'}]);
    }

    return (
        <React.Fragment>
            <div className="row">

                <div className="col s5 m9 Menu-fixed-window">

                    <div className="Menu-sticky-navigation-bar">
                        <i class="medium material-icons">arrow_back</i>
                    </div>

                    <div id="subToolbar" className="row">

                        <div className="input-field col s7">
                            <i class="material-icons prefix">search</i>
                            <input id="icon_telephone" type="tel" class="validate" />
                            <label for="icon_telephone">Buscar</label>
                        </div>

                        <div className="input-field col s5">
                            <select>
                                <option value="" disabled selected>Filtrar por etiqueta</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>

                    </div>

                    <div className="Menu-table-container">

                        <table className="highlight centered">

                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    foodsList.map((producto) => {
                                        return (
                                            <tr key={producto.id_producto} onClick={() => {handleOnRowClicked(producto.id_producto)}}>
                                                <td>{producto.nombre}</td>
                                                <td>{'₡ '+producto.precio}</td>
                                                <td className="Menu-buttons-container">
                                                    <a className="waves-effect waves-light indigo lighten-4 btn-large"><i className="material-icons red-text">delete</i></a>
                                                    <a class="waves-effect waves-light indigo lighten-4 btn-large"><i class="material-icons green-text">edit</i></a>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>

                        </table>

                    </div>

                </div>
                <div className="col s7 m3">
                    <h3 style={{textAlign:'center'}}>Etiquetas asociadas</h3>

                    {
                        tagsList.map((tag) => {
                            return (
                                <div class="chip" key={tag.id}>
                                    {tag.nombre}
                                    <i class="close material-icons">close</i>
                                </div>
                            );
                        })
                    }
                
                </div>
            </div>

            <div className="Menu-floating-button">
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            
        </React.Fragment>
    );
}

export default Menu;