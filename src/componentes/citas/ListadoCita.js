import React, { useContext, useState, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Cita from './Cita';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import Pagination from '../layout/paginacion';

const ListadoCita = () => {

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;
    let cargo; 

    if(usuario){
        cargo = usuario.cargo;
    }

    const citasContext = useContext(citaContext);
    const { listarCitas, citas, filtrarCitas, citasfiltradas, searching } = citasContext;

    useEffect(() => {
        listarCitas();
        // eslint-disable-next-line
    }, [])

    const SelectDate = e => {
        let month = 0;
        if (e.getMonth()+1 < 10) {
            month = `0${e.getMonth()+1}`;
        }else{
            month = e.getMonth() + 1;
        }

        let day = 0;
        if (e.getDate() < 10) {
            day = `0${e.getDate()}`
        }else{
            day = e.getDate();
        }

        const fecha = `${e.getFullYear()}-${month}-${day}`;
        filtrarCitas(fecha);
    }

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = citas.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts2 = citasfiltradas.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return ( 
        <>

        <div className="container">

            <div className="row mt-3">

                <div className="col-md-3">
                <InfiniteCalendar 
                width={300}
                height={200}
                selected = {false}
                locale={{
                    locale: require('date-fns/locale/es'),
                    headerFormat: 'dddd, D MMM',
                    weekdays: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
                    blank: 'Seleccione una fecha',
                    todayLabel: {
                    long: 'Hoy',
                    short: 'Hoy.'
                    }
                    }}
                    onSelect={(e) => SelectDate(e)}
                />
                </div>

                <div className="col-md-8">
                    {
                         searching && citasfiltradas.length === 0

                         ? 
                        (<h3 className="text-center">No hay citas disponibles para el día seleccionado</h3>)

                         :
                        ( citas.length === 0
                            ? (<h3 className="text-center">No hay disponibilidad de citas</h3>) 
                            : 
                            <table className="table table-bordered mt-3">
        
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        {
                                            cargo !== 'Paciente'
                                            ? <th scope="col">Paciente ID</th>
                                            : null
                                        }
                                        {
                                            cargo !== 'Paciente'
                                            ? <th scope="col">Estado</th>
                                            : null
                                        }
                                        <th scope="col" className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    {
                                        searching 
                                        ? (
                                            citasfiltradas.map(citafiltrada => (
                                                <Cita
                                                
                                                key={citafiltrada._id}
                                                cita={citafiltrada}
                                                />
                                            ))
                                        )
                                        :
                                        (currentPosts.map(cita => (
                                            <Cita
                                            key={cita._id}
                                            cita={cita}
                                            />
                                        )))
                                    }
        
                                </tbody>
        
                            </table>
        
                            )
                    }

                </div>

            </div>

        </div>
        {currentPosts2.length === 0 
                ?
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={citas.length}
                        paginate={paginate}
                    /> 
                :
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={citasfiltradas.length}
                        paginate={paginate}
                  />
        } 
        </>
    );
}
 
export default ListadoCita;