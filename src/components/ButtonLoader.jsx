import React from 'react'
import styles from "@/styles/buttonLoader.module.css"
export default function ButtonLoader({defoult=true}) {
  return (
    <div className={`${defoult ? styles.loader:styles.loader2} w-5`}></div>
  )
}
