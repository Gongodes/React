import React from 'react'

const Contador = () => {

const [contador,SetContador] = React.useState(0)
 
//const aumentar = () =>{ console.log('click')
//SetContador(contador + 1)
//}


    return (
        <div>
           <h2>Contador</h2>
           <h3>nuestro numero aumentando: {contador}</h3>
           <h4>{contador >2 ? 'es mayor a dos': 'es menor a dos' }</h4>
           <button onClick={()=>SetContador(contador+1)} >Aumentar</button>
        </div>
    )
}

export default Contador
