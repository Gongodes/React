import React from 'react'

const saludo ='hola desde constante'
const imagen ='https://curiosfera-historia.com/wp-content/uploads/Historia-del-surf.jpg'
const Variables = () => {
    return (
        <div>
           <h2>Nuevo Componente {saludo}</h2>
           <img src={imagen} alt="" ></img>
        </div>
    )
}

export default Variables
