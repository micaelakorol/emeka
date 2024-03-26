import Image from 'next/image'
import React from 'react'
import styles from '../../../../public/styles/skills.module.css'
const ImageSkills = ({name,src}) => {
  return (
    <abbr title={name}>
    <Image
      src={src}
      alt={name}
      width={55}
      height={55}
      className={styles.skillIcon}
    />
  </abbr>
  )
}

export default ImageSkills