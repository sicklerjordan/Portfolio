import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Side from './components/Side';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Intro from './components/Intro';
import useLocalStorage from 'use-local-storage';
import {BsToggleOff} from 'react-icons/bs'
import {BsToggleOn} from 'react-icons/bs'


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      {theme === 'light' ? <div className='toggle-mode'>CHANGE THEME</div> : <div className='toggle-mode'>CHANGE THEME</div>} 

{theme === 'light' ? <BsToggleOff onClick={switchTheme} className='toggle'/> : <BsToggleOn onClick={switchTheme} className='toggle'/>} 
      <Intro />
      <Navbar />
      <Hero />
      <Side />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
