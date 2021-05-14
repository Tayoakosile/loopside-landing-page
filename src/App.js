// default
import React from 'react'
import Footer from './Footer/Footer'
// internal
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
  const [windowWidth, setWindowWidth] = React.useState(false)
  const viewPort = window.matchMedia('(min-width:1000px)')

  React.useEffect(() => {
    setInterval(() => {
      viewPort.matches ? setWindowWidth(true) : setWindowWidth(false)
      console.log(viewPort)
    }, 2000)
  }, [])

  return (
    <>
      <Header viewPortControl={windowWidth} />
      <Main />
      <Footer />
    </>
  )
}

export default App
