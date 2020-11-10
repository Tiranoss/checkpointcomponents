import React from 'react';
import './App.css';
import ProfilPhoto from './Profile/ProfilPhoto'
import FullName from './Profile/FullName'
import Address from './Profile/Address'

function App() {
  return (
    <div className="App">
    <ProfilPhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
