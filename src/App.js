import {Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
       {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />*/}

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. 
        <Route path="*" element={<NoMatch />} />*/}
      </Route>
  </Routes>
  );
}

export default App;