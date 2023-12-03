import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                        <div className={styles.skill} key={id}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>  
                        <p>{skill.title}</p> 
                        </div>
                    )
                })}
            </div>
            <ul>
                {history.map((hitstoryItem,id)=>{
                    return <li key={id} className={styles.historyItem}>
                        <img src={getImageUrl(hitstoryItem.imageSrc)} alt={`${history.organisation} Logo`} />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${hitstoryItem.role},${hitstoryItem.organisation}`}</h3>
                            <p>{`${hitstoryItem.startDate} - ${hitstoryItem.endDate}`}</p>
                            <ul>{hitstoryItem.experiences.map((experiences,id)=>{
                                return <li key={id}>{experiences}</li>
                            })}</ul>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </section>
  )
}
