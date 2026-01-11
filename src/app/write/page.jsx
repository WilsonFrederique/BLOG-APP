"use client"

import React, { useState } from 'react'
import styles from "./writePage.module.css"
import Image from 'next/image'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { FaPlus } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";

const WritePage = () => {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <FaPlus className={styles.icone} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <CiImageOn className={styles.icone} />
            </button>
            <button className={styles.addButton}>
              <FiUpload className={styles.icone} />
            </button>
            <button className={styles.addButton}>
              <MdOndemandVideo className={styles.icone} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...' />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage