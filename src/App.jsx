import { useState } from 'react'
import {Routes, Route} from 'react-router'
import Home  from './components/Home.jsx'
import NotFoundContent from './components/reusable/NotFoundContent.jsx'
import Layout from './utils/Layout.jsx'
import Propuestas from './components/Propuestas.jsx'
import Catalogo from './components/Catalogo.jsx'
function App() {

  //Manejo de rutas...
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="nuestrasPropuestas" element={<Propuestas />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="*" element={<NotFoundContent />} />
      </Route>
    </Routes>
  )
}

export default App;
