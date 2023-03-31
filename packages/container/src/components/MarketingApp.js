import React, {useEffect, useRef} from 'react'

const firstLoad = new Promise(resolve => setTimeout(resolve, 10000));

async function fetchComponent() {
  await firstLoad
  console.log(await import('marketing/MarketingApp'))
  console.log(await import('marketing/test'))
  return (await import('marketing/MarketingApp'))
}

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    fetchComponent()
      .then(callback => {
        console.log(callback)
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