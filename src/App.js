//import React from "react";
// import Saludo from "./Saludo";
//import Producto from "./Producto";
//import ContadorFuncional from "./ContadorFuncional";
//import DetalleProducto from "./DetalleProducto";

// Ejercicio #1 Saludo.
// function App() {
//   return (
//     <div>
//       <Saludo nombre="¡Sara!." />
//     </div>
//   );
// }  
// export default App;

// Ejercicio # 2 Producto.
// function App(){
//   return (
//     <div>
//       <Producto nombreproducto = "Mochila" precioproducto="100000"/>
//     </div>
//   );
// }
// export default App;

// Ejercicio # 3 Comparar componentes funcionales y de clase.

//Ejercicio # 4 Componente funcional llamado ContadorFuncional.
// function App() {
//   return (
//     <div>
//       <ContadorFuncional />
//     </div>
//   );
// }
// export default App;

//Ejercicio # 5 Componente de clase llamado ContadorClase
// class ContadorClase extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { contador: 0 };
//   }
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.contador}</p>
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }
// export default ContadorClase;

// Parte 4
//Crear un componente ListaDeProductos.

// import React, { useState } from "react";
// import ListaDeProductos from "./ListaDeProductos";

// function App() {
//   const [producto, setproducto] = useState({ nombre: "", precio: "" });
//   const [productos, setproductos] = useState([]);

//   const manejarEnvio = (evento) => {
//     evento.preventDefault();
//     setproductos([...productos, producto]);
//     setproducto({ nombre: "", precio: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={manejarEnvio}>
//         <input
//           type="text"
//           value={producto.nombre}
//           onChange={(e) => setproducto({ ...producto, nombre: e.target.value })}
//           placeholder="Ingrese el nombre del producto."
//         />
//         <input
//           type="text"
//           value={producto.precio}
//           onChange={(e) => setproducto({ ...producto, precio: e.target.value })}
//           placeholder="Ingrese el precio del producto."
//         />
//         <button type="submit">Agregar</button>
//       </form>
//       <h1> Lista de los productos</h1>
//       <ListaDeProductos productos={productos} />
//     </div>
//   );
// }
// export default App;

//Ejercicio # 5 Crear un componente DetalleProducto.

// function App() {
//   return (
//     <div>
//       <DetalleProducto
//         nombre="Rosa"
//         precio="12.000$"
//         descripcion="Rosa roja para  Amor y amistad."
//       />
//     </div>
//   );
// }

// export default App;
