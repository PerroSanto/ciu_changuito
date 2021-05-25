import React, { Fragment } from 'react';



const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo los valores
    const {id, articulo, precio} = producto;

    //Funcion para agregar productos al changuito
    const seleccionarProducto = (id) => {
        const producto = productos.filter (
            producto => producto.id === id)[0];
        agregarProducto([
            ...changuito, //con esto tomamos una copia de lo que ya estaba en el changuito y asi agregamos al array.
            producto
        ]);
        console.log(producto);
    };

    //aca va la funcion para eliminar un producto del changuito.
    //recorremos el changuito
    //Cuando el changuito este vacio que aparezca "El carrito esta vacio"
    //de la app pasa al changuito y de ahi al producto.
    /*
    const eliminarProducto = (id) => {
        console.log("Quitando del changuito...", id)
    };
    */

    //Funcion para eliminar del changuito

    const eliminarProducto = (id) => {
        const producto = productos.filter (
            producto => producto.id === id)[0];
        agregarProducto([
            ...changuito, //con esto tomamos una copia de lo que ya estaba en el changuito y asi agregamos al array.
            producto
        ]);
        console.log(producto);
    };




//Todo el JS se escribe antes del RETURN
    return ( 
        <Fragment>
            <div>
                <h3>{id} - {articulo} - ${precio}</h3>
                
                {
                    //Operador ternario
                    productos
                    ?
                <button
                    type="button"
                    onClick={ () => seleccionarProducto(id)}
                >Comprar</button>
                :
                <button 
                    type="button"
                    //Esto es lo que agregamos extra
                    onClick = { () => eliminarProducto(id)}
                >Eliminar</button>

                }   

            </div>
        </Fragment>
     );
}
 
export default Producto;




