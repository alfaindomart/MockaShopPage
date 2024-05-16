import './App.css'
import { useState, useEffect } from 'react'
import { Home } from './pages/Home'


function App() {

  const [products, setProducts] = useState(null)


  return (
    <>
    <Home />
    </>
  )
}

export default App
