import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = ()=>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
               <h1 className={styles.title}>Hi, I'm Pluem.</h1> 
               <p className={styles.description}>I'm a Front-End developer using React.js , Next.js<br/>Reach out if you like to learn more!</p>
               <a href="#contact" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero imgae of me" className={styles.heroImg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}