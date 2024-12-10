import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Socials from './pages/Socials';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">Yunik's Web</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="/hobbies">Hobbies</a></li>
              <li className="nav-item"><a className="nav-link" href="/socials">Socials</a></li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
