import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {

    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='Write a comment...' className={styles.input} />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Walle Fred</span>
                            <span className={styles.date}>08.01.2026</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias qui illo. 
                        Officia ipsam, cupiditate, est quas praesentium optio exercitationem, 
                        ea tempora rem dignissimos voluptates neque dolor placeat minima accusamus?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Walle Fred</span>
                            <span className={styles.date}>08.01.2026</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias qui illo. 
                        Officia ipsam, cupiditate, est quas praesentium optio exercitationem, 
                        ea tempora rem dignissimos voluptates neque dolor placeat minima accusamus?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Walle Fred</span>
                            <span className={styles.date}>08.01.2026</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias qui illo. 
                        Officia ipsam, cupiditate, est quas praesentium optio exercitationem, 
                        ea tempora rem dignissimos voluptates neque dolor placeat minima accusamus?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Walle Fred</span>
                            <span className={styles.date}>08.01.2026</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias qui illo. 
                        Officia ipsam, cupiditate, est quas praesentium optio exercitationem, 
                        ea tempora rem dignissimos voluptates neque dolor placeat minima accusamus?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Walle Fred</span>
                            <span className={styles.date}>08.01.2026</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias qui illo. 
                        Officia ipsam, cupiditate, est quas praesentium optio exercitationem, 
                        ea tempora rem dignissimos voluptates neque dolor placeat minima accusamus?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments