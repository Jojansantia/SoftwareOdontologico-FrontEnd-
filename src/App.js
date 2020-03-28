import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MenuPrincipal from './componentes/principal/MenuPrincipal'
import Login from './componentes/principal/Login'
import ConsultarPacientes from './componentes/admin/ConsultarPacientes';
import ConsultarPersonal from './componentes/admin/ConsultarPersonal';
import PacienteState from './context/pacientes/pacienteState';
import PersonaState from './context/personal/personaState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertaState'

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return(
    <PacienteState> 
      <PersonaState> 
<<<<<<< HEAD
        <AlertaState>
        <AuthState>
=======
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
        <Router>
          <Switch>
            <Route exact path="/" component={MenuPrincipal}/>
            <Route exact path="/iniciar-sesion" component={Login}/>
            <Route exact path="/consultar-pacientes" component={ConsultarPacientes}/>
            <Route exact path="/consultar-personal" component={ConsultarPersonal}/>
          </Switch>
        </Router>
<<<<<<< HEAD
        </AuthState>
        </AlertaState>
=======
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
      </PersonaState>
    </PacienteState> 
  );
}

export default App;