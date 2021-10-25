
// import landing_pagehd from './landing_pagehd.gif';
import './App.css';
import ImageMap from "image-map";

import { useEffect } from 'react';

import Svganimation from './svganimation';

function App() {
  useEffect(() => {
    ImageMap('img[usemap]', 500)
  })

 

  return (
    <div className="App">
     
     <Svganimation/>
    </div>
  );
}

export default App;
