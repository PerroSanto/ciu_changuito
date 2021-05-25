
import Header from './components/Header';
import Footer from './components/Footer';
//tambien hay que definir el useState aca.
import { Fragment, useState } from 'react';
import Producto from './components/Producto';
import Changuito from './components/Changuito';

function App() {



  //Listado de productos con un state con hooks
  //El formato del state es primero el objeto que se va a tocar
  //luego la funcion que se encarga de modificar el estado inicial
  //useState(cualquiercosa) es el estado inciial.
  const [productos, guardarProductos] = useState([
    //Aca va el estado incial.
    {id:1, articulo:"Gitarra criolla", precio:12500},
    {id:2, articulo:"Gitarra electrica", precio:72500},
    {id:3, articulo:"Bajo Jazz Bass", precio:21500},
    {id:4, articulo:"Ukelele", precio:23250}
  ]); //este es el formato de un state, luego de la coma va la funcion que se encargara de modificar ese listado inicial.

//Creamos el state del chaguito de compras.
//se inicializa vacio,
  const [changuito, agregarProducto] = useState([])

  return (
    <Fragment>
      <Header />
      <h1>Instrumentos Musicales SA - Compre Online</h1>
      {productos.map(producto => 
        //iteramos la lista de productos de mas arriba.
        (
        <Producto 
        key = {producto.id}
        producto = {producto}//mandamos las iteraciones usando props.
        productos = {productos} //le pasamos todos los productos y los recibe en la funcion de productos.
        changuito = {changuito}
        agregarProducto = {agregarProducto}
        />
        )
        )} 
      
      <Changuito 
        changuito = {changuito}
      />
      
      
      <Footer
      anio={2021} 
      />
  </Fragment> //se le pueden pasar props (propiedades) desde el padre al hijo en el momento de crearlo.
  );
}



export default App;
