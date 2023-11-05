import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import MyStory from './components/MyStory';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
          <Route path = '/' element={<Home />}></Route>
          <Route path = '/projects' element={<Projects />}></Route>
          <Route path = '/resume' element={<Resume />}></Route>
          <Route path = '/my-story' element={<MyStory />}></Route>
        </Routes>
      </div>
  );
}

export default App;
