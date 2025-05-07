import React from 'react'

 export  function ListaOrdenada({productos}) {
  return (
    <div>
        <h1>Lista de productos</h1>
        <ol>
            {productos.map((producto,index) =>(
                <li key={index}>{producto}</li>
            ))}
        </ol>
    </div>
  )
}

export  function Tarjeta({titulo,descripcion,boton}){
    return(
        <div style={{border:"2px solid white",borderRadius:"25px",padding:"10px"}}
            className="tarjeta">

            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{boton}</button>
        </div>
    )
}








