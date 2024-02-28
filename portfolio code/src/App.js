import './App.css';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProjectPage } from './components/ProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
