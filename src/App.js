import './App.css';
import './css/main.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ressurser from './resources/ressurser'
import ContentPrint from './components/ContentPrint';
import ResourcePage from './components/ResourcePage';

function App() {
  return (
    
    <Routes>  
      <Route element={<Layout/>}>
        <Route index element={<ContentPrint/>}/>
        <Route path=':title' element={<ResourcePage ressurser={ressurser} />}/>




      </Route>
    </Routes>


  );
}

export default App;
