import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Walle Fred</span>
                        <span className={styles.date}>08.01.2026</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut laborum debitis 
                        adipisci modi corporis doloremque placeat ut fuga, accusamus alias in cumque? 
                        Ducimus accusantium hic saepe aperiam iusto! At.
                    </p>
                    <h5>
                        Lorem ipsum dolor sit amet
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut laborum debitis 
                        adipisci modi corporis doloremque placeat ut fuga, accusamus alias in cumque? 
                        Ducimus accusantium hic saepe aperiam iusto! At.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut laborum debitis 
                        adipisci modi corporis doloremque placeat ut fuga, accusamus alias in cumque? 
                        Ducimus accusantium hic saepe aperiam iusto! At.
                    </p>
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage