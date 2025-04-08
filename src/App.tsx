import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AltPage from './pages/Alt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alt' element={<AltPage />} />
      </Routes>
    </Router>
  );
}

export default App;
