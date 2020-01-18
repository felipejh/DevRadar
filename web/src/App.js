import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItems';

// Componente: Bloco isolado o qual não interfere no restante da aplicação. É uma função que retorna um conteúdo HTML, CSS ou JS
// Propriedade: São os atributos de um componente. Ex.: title, id, className. Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar do conceito imutabilidade). {useState}

function App() {
  const [devs, setDevs] = useState([]);

  // useEffect: Executa apenas uma única vez
  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    
    if (response.status === 203){
      alert(response.data)
      return
    }

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
