import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Hero } from "./component/Hero/Hero.jsx";
import { About } from "./component/About/About.jsx";
import styles from "./App.module.css";
import { Experience } from "./component/Experience/Experience.jsx";


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
