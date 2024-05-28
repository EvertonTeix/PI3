// import { useState } from 'react';
// import Content from './components/content/content';
// import { Menu } from './components/header/menu';

import { useState } from 'react';
import './App.css';
import ContentLogin from './components/login/contentLogin/contentLogin';
import { MenuLogin } from './components/login/menuLogin/menuLogin';

function App() {
  // const [numero, setNumero] = useState(0);
  const [valor, setValor] = useState(0);
  // const handleNumeroChange = (value: number) => {
  //   console.log(value);
  //   setNumero(value);
  // };

  const handleNumChange = (value: number) => {
    setValor(value);
  };

  return (
    <div className='container_app'>

      <MenuLogin onNumeroChange={handleNumChange} />
      <ContentLogin num={valor} />
      {/* <Menu onNumeroChange={handleNumeroChange} />
      <Content escolha ={numero}/> */}
    </div>
  );
}

export default App;
