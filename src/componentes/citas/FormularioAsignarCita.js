import React, { useState, useContext } from 'react';
import citaContext from '../../context/citas/citaContext';

const FormularioAsignarCita = () => {

    const citasContext = useContext(citaContext);
    const { citasignada, modificarCita } = citasContext;
    const {fecha, hora, pacienteId, _id} = citasignada;
    console.log(fecha)
    console.log(hora)
    console.log(pacienteId)
    console.log(_id)

    const [asignarPaciente, guardarasignarPaciente] = useState({
        pacienteId: '',
        _id: _id,
        fecha: fecha,
        hora: hora
    });

    const onChange = e =>{
        guardarasignarPaciente({
            ...asignarPaciente,
            [e.target.name]: e.target.value
        })

    }

    const Submit = e => {
        e.preventDefault();
        modificarCita(asignarPaciente)
    }
    return ( 
        <>
            <div className="container">
                
                <div className="row mt-3">

                    <div className="col-md-3 p-0">

                        <div className="card bg-light shadow" style={{ borderWidth: 2}}>
                            
                            <div className="card-body">

                                <h5 className="card-title font-weight-bold">Información de la cita</h5>

                                <p className="card-text">
                                    Fecha: {fecha}
                                </p>

                                <p className="card-text">
                                    Hora: {hora}
                                </p>

                                <p className="card-text">
                                    Paciente: {pacienteId}
                                </p>

                            </div>

                        </div>

                    </div>
                    
                    <div className="col-md-9 p-0">

                        <h3 className="text-center mb-4">Digite el documento del paciente</h3>

                        <form onSubmit={Submit}>

                            <div className="form-group">

                                <input type="text" className="form-control" name="pacienteId" placeholder="Documento" onChange={onChange}></input>

                            </div>

                            <div className="form-group">

                                <input type="submit" className="form-control boton font-weight-bold" value="Asignar cita"></input>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
     );
}
 
export default FormularioAsignarCita;