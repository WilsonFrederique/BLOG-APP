"use client";

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from "next/link";

const AuthLinks = () => {

  const [open, setOpen] = useState(false);

  // Temporary
  const status = "authentificated";

  return (
    <>
      {status==="notauthentificated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/white" className={styles.link}>White</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
  
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

          {status==="notauthentificated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/white">White</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks