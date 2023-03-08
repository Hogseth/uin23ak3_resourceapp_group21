import './App.css';
import './css/main.css';
import resources from './resources/ressurser'
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from './components/Resources';
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout />}>
          <Route path=":slug" element={<Resources resources={resources}/>} />
          <Route path=":slug" element={<Button resources={resources}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
