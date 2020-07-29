import React from 'react';
import Header from './Component/Navbar';
import Page1 from './Component/Page1';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (<BrowserRouter>
    <div className="App">
     <Header />
     <Page1 />
    </div>
    </BrowserRouter>
  );
}

export default App;
