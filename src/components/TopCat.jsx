import { food } from "../assets"

import React from 'react'

const TopCat = () => {
  return (
    <div className="flex w-[80px] h-[80px] rounded-full">
        <img src={food} alt="food" />
    </div>
  )
}

export default TopCat