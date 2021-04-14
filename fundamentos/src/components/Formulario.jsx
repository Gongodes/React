import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setlista] = React.useState([])


    const guardarDatos = (e) => {
        e.preventDefault();
        if (!fruta.trim()) { console.log('esta vacio fruta'); return };
        if (!descripcion.trim()) { console.log('esta vacio descripcion'); return }
        console.log('procesando datos' + ' ' + fruta + ' ' + descripcion)

        setlista([...lista,{Fruta:fruta, Descricion:descripcion}])
        e.target.reset();
        setFruta('');
        setDescripcion('');
    }

    return (
        <div className="d-grid gap-2">
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos} className="d-grid gap-2">
                <input type="text" placeholder="Ingrese fruta" className=" form-control mb-2" onChange={e => setFruta(e.target.value)}></input>
                <input type="text" placeholder="Ingrese descripcion" className=" form-control mb-2" onChange={e => setDescripcion(e.target.value)}></input>
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                
                    {lista.map((item,index) =>(
                        <li key={index}>
                            {item.Fruta} - {item.Descricion}
                        </li>
                    ) )}

                
            </ul>
       
       
        </div>
    )
}

export default Formulario
