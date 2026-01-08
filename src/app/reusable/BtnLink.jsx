import Link from 'next/link'
import React from 'react'

const BtnLink = ({href,className,children, target}) => {
  return (
   <Link href={href} className={className} target={target}>{children}</Link>
  )
}

export default BtnLink