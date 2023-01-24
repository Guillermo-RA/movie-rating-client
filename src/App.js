import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://movie-rating.test/api')
        .then(res => res.json())
        .then(data => setData(data));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Usuario: {data?.user} - Contraseña: {data?.password}</p>
        </header>
      </div>
  );
}


export default App;
