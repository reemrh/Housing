import React from 'react';

import './App.css';
import Navbar from'./components/navbar';
import Header from'./components/header';
import Services from'./components/services';
import Description from'./components/description';
import Blockquote from'./components/blockquote';
import Developing_Progress from'./components/developing_progress';
import Gallery from'./components/gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services/>
      <Description />
      <Blockquote />  
      <Developing_Progress />   
      <Gallery /> 
    </div>
  );
}

export default App;
