import styles from './App.module.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>     
      <Footer/>
    </div>
  );
}

export default App;
