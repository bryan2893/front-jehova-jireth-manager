import React,{useEffect,useState} from 'react';
import M from 'materialize-css';
import {getCategorias} from '../../../service/categorias_productos';

const TagSelect = ({onCategorySelect}) => {

    const [tags,setTags] = useState([{id_categoria:1,nombre:'algo'}]);

    useEffect(() => {
        getCategorias().then((response) => {
            const {categoriasProducto} = response;
            const array = categoriasProducto.slice();
            setTags(array);
            
            //Una vez se agregan las opciones se inicializa el componente materialize...
            let elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        }).catch((error) => {
        })

    },[])

    return (
        <div className="input-field col s5">
            <select onChange={onCategorySelect}>
                <option value="" disabled selected>Filtrar por etiqueta</option>
                {tags.map((opt) => {
                    return (
                        <option key={opt.id_categoria} value={opt.id_categoria}>{opt.nombre}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default TagSelect;