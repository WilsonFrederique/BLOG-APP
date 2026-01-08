import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div  className={styles.container}>
      <h1 className={styles.title}><b>Bonjour, Wils dev ici.</b> Découvrez mes articles et mes idées créatives.</h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur enim saepe quibusdam.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptatum ducimus at officia 
            tempore asperiores, eveniet laudantium aperiam ea repudiandae laboriosam nobis quo non molestias 
            iusto suscipit nisi nemo necessitatibus!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured