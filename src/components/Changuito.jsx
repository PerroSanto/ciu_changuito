import React, { Fragment } from 'react';
import './changuito.css';
import Producto from './Producto';

const Changuito = ({changuito}) => {
    return ( 
        <Fragment>
            <div className="changuito">
                <h3>Changuito de compras</h3>
                {changuito.length === 0 ? (<p>Changuito vacio.</p>) :(
                changuito.map(
                    producto => (
                        <Producto
                            key={producto.id}
                            producto = {producto}
                        />
                    )
                ))}
                
            </div>
        </Fragment>
     );
}
 
export default Changuito;

