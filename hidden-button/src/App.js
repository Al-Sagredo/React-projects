import React, { Component, useState } from 'react';
import Input from './components/Input';
import Boton from './components/Boton'


function App() {
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  return (
    <div>
    <h1>Desafío Estado de los componentes y eventos</h1>
    <Input
    name= {name}
    setName={setName}
    password={pwd}
    setPassword={setPwd}
    />
    {pwd=="252525" && <Boton/>}
    
    </div>
  );}
    
  


export default App;
