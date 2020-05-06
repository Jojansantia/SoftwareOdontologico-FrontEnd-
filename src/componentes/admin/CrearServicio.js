import React, {useState, Fragment, useEffect, useContext} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import AuthContext from '../../context/autenticacion/authContext'
import FormularioCrearServicio from '../servicios/formularioCrearServicio';
import servicioState from '../../context/servicios/serviciosContext';

const CrearServicio = (props) => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    
    const { servicioseleccionado } = useContext(servicioState);
    let tituloHead;

    if(servicioseleccionado !== null){
        tituloHead = "Editar Servicio";
    }else{
        tituloHead = "Crear Servicio";
    }

    return (  
        <Fragment>
        <div className="d-flex" id="wrapper">
            {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                    <FormularioCrearServicio props={props} />
                </div>
            </div>
          </div> 
        </Fragment>
    );
}
 
export default CrearServicio;