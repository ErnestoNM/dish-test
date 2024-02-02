import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Projects } from './pages/Projects'
import { ProjectsForm } from './pages/ProjectsForm'
import { Navbar } from './components/Navbar';

const App = () => (
  <>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/projects' />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects-form' element={<ProjectsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;