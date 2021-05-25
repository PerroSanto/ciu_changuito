import React from 'react';

//las props se pasan separadas por comas.
//en lugar de escribir props y luego llamar a la props
//Se pasa directamente el nomnre de la props.
const Footer = ({anio}) => {

    //aca va el JS que necesito.
    //Vamos a calcular el año corriente


    return (  
        <h2>Año {anio}</h2> 
     );
} 
 
export default Footer;      