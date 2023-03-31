// import { mount } from 'marketing/MarketingApp'
import React, {useEffect, useRef} from 'react'
import('marketing/MarketingApp').then(({mount}) => {
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

});
