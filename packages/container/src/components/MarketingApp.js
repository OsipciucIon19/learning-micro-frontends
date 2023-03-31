import React from 'react'
import {useEffect, useRef} from "react";
const { mount } = import('marketing/MarketingApp')
const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div ref={ref} />
  )
}

export default MarketingApp
