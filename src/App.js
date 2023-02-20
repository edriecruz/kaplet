import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Components/About';
import Freebies from './Components/Freebies';
import Main from './Components/Main';
import Works from './Components/Works';

import Photography from './Components/Works/Photography'
import Layout from './Components/Works/Layout'
import Illustration from './Components/Works/Illustration'
import Logo from './Components/Works/Logo'
import FreebiesPage from './Components/Freebies/FreebiesPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Works' element={<Works/>}/>
        <Route path='/Freebies' element={<Freebies/>}/>

        
        <Route path='/Photography' element={<Photography/>}/>
        <Route path='/Layout' element={<Layout/>}/>
        <Route path='/Illustration' element={<Illustration/>}/>
        <Route path='/Logo' element={<Logo/>}/>

        <Route path='/FreebiesPage' element={<FreebiesPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
