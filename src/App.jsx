import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        <h1>CONSUMIR API</h1>

        <div className="card">
          <table>
            <thead>
              <tr>
              <th>Id</th>
                <th>Nombre del Producto</th>
                   <th>Precio</th>
                <th>Descripcion</th>
                <th>Categoría</th>
                <th>Aciones</th>
            

        
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr key={product.id}>
                   <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>
                    <div>
                     <button class="Post">Editar</button> 
                
                    <button class='delete'>Eliminar</button>
                  
                   
                  </div>
                   </td>
                
                  {/* Añadir más celdas según la información que desees mostrar */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
