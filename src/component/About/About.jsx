import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting " className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimised and API.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple Landing pages and have created desiged systems as well.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
