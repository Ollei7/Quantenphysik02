import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Module from './pages/Module';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="einfuehrung" element={<Introduction />} />
          <Route path="module/:moduleId" element={<Module />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
