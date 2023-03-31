import React, {lazy} from 'react'
import {useEffect, useRef} from "react";
const Marketing = lazy(() => import('marketing/MarketingApp'))
const MarketingApp = () => {
  const ref = useRef(null)

  // useEffect(() => {
  //   mount(ref.current)
  // }, [])

  return (
    <Marketing />
  )
}

export default MarketingApp
