import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Casamentos from './pages/Casamentos';
import Sunsets from './pages/Sunsets';
import FestasPrivadas from './pages/FestasPrivadas';
import Contacto from './pages/Contacto';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casamentos" element={<Casamentos />} />
          <Route path="/sunsets" element={<Sunsets />} />
          <Route path="/festas-privadas" element={<FestasPrivadas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
