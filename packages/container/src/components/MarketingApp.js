import React, {useEffect, useRef} from 'react'

const firstLoad = new Promise(resolve => setTimeout(resolve, 10000));

async function fetchComponent() {
  await firstLoad

  return (await import('marketing/MarketingApp'))
}

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    fetchComponent()
      .then(callback => {
        callback.mount(ref.current)
      })
      .catch(e => {
        console.log(typeof e)
      });
  }, [])

  return (
    <div ref={ref}/>
  )
}

export default MarketingApp