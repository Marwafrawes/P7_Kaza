import {Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import {NotFound} from './pages/NotFound/Notfound';
import { Apropos } from './pages/Apropos/apropos';
import { FicheLogement } from './pages/FicheLogement/FicheLogement';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<Apropos />} />
        <Route path='fiche/:id' element={<FicheLogement />} />
    
      </Route>
  </Routes>
  );
}

export default App;
