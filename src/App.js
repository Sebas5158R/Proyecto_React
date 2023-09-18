import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './pages/auth/login';
import CrearCuenta from './pages/auth/crearCuenta';
import Home from './pages/home';
import ProyectosAdmin from './pages/projects/ProyectosAdmin';
import InsertarPaciente from './components/InsertarPaciente';
import PacientesEditar from './pages/projects/PacientesEditar';
import CitasCrear from './pages/citas/CitasCrear';
import ListadoCitas from './pages/citas/ListadoCitas';
import CitasEditar from './pages/citas/CitasEditar';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Login/>}/>
          <Route path="/crearCuenta" exact element = {<CrearCuenta/>}/>
          <Route path="/home" exact element = {<Home/>}/>
          <Route path="/proyectos-admin" exact element = {<ProyectosAdmin/>}/>
          <Route path="/pacientes-crear" exact element = {<InsertarPaciente/>}/>
          <Route path="/pacientes-editar/:idPaciente" exact element = {<PacientesEditar/>}/>
          <Route path="/crear-cita/:idPaciente" exact element = {<CitasCrear/>}/>
          <Route path="/listar-citas" exact element = {<ListadoCitas/>}/>
          <Route path="/editar-cita/:idCita" exact element = {<CitasEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
