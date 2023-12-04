import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Hero } from "./component/Hero/Hero.jsx";
import { About } from "./component/About/About.jsx";
import styles from "./App.module.css";
import { Experience } from "./component/Experience/Experience.jsx";
import { Contact } from "./component/Contact/Contact.jsx";


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
