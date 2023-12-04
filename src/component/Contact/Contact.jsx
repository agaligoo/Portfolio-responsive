import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:nuttasit.weawsuwun@gmail.com">nuttasit.weawsuwun@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/nuttasit-weawsuwun-2625452a1/">linkedin.com/nuttasit-weawsuwun</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/agaligoo">github.com/agaligoo</a>
            </li>
        </ul>
    </footer>
  )
}
