import styles from './App.module.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>      
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
