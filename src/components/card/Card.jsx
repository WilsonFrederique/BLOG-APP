import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>08.01.2026 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1 className={styles.titleLink}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            </Link>            
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus numquam facere aperiam quibusdam fugiat, magni itaque. 
                Quidem est eaque nemo quisquam dolor labore eligendi porro, deleniti modi et sint provident?
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card