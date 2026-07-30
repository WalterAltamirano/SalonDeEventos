import { useState } from 'react'
import {Routes, Route} from 'react-router'
import Home  from './components/Home.jsx'
import NotFoundContent from './components/reusable/NotFoundContent.jsx'
function App() {

  //Manejo de rutas...
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<NotFoundContent />} />
    </Routes>
  )
}

export default App;
