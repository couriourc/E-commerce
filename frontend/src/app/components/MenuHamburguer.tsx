'use client'

import { useState } from "react"

export default function MenuHamburguer() {

  const [click, setClick] = useState(false)

  const clicked = () => {
    setClick(!click)
    if (click===true) {
      console.log('close')
    }
  }

  return (
    <div className="flex flex-col gap-2 absolute right-0 top-0 m-4" onClick={clicked}>
      <span className="h-0.5 bg-black w-8"></span>
      <span className="h-0.5 bg-black w-8"></span>
      <span className="h-0.5 bg-black w-8"></span>
    </div>
  )
}

