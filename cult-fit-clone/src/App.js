import styles from './App.module.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <AllRoutes/>   
      <Footer/>
    </div>
  );
}

export default App;
