import './App.css';
import './css/main.css';
import resources from './resources/ressurser'
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout />}>
          <Route path=":slug" element={<Article resources={resources}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
