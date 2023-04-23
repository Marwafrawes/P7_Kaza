import {Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import {NotFound} from '../src/pages/NotFound/Notfound';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
    
      </Route>
  </Routes>
  );
}

export default App;
