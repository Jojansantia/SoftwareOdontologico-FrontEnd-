import React,{Fragment,useState, useContext, useEffect} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioFacturas from '../Facturas/FormularioFacturas';
import AuthContext from '../../context/autenticacion/authContext';

const CrearFactura = (props) => {

    const [bandera,actualizarBandera]=useState(true);
    const [ redirect, actualizarRedirect ] = useState(false)

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;
    
    /*useEffect(() => {

      if(redirect) props.history.push('/factura-pdf')  
      // eslint-disable-next-line
    }, [redirect])*/

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    return (  
        <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={"Crear Factura"} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                  <div className="container-fluid">
                    <FormularioFacturas /*redireccion={ actualizarRedirect }*/ />
                  </div> 
                </div> 
            </div> 
            
        </Fragment>
    );
}
 
export default CrearFactura;