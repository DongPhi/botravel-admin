import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Mainpages from './components/mainpages/Pages';
import Login from './components/auths/Login';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />

          <Mainpages />
        </div>
      </Router>
    </DataProvider>   
  );
}

export default App;
