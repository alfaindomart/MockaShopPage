import './App.css'
import { Header } from './components/header/Header';
import { Outlet} from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';

import { Cart } from './components/cart/Cart';




function App() {

  const [inCart, setInCart] = useState([])

  return (
    <>
      <Header><Cart itemsInCart={inCart.reduce((acc, obj) => {return acc + obj.amount}, 0)}/></Header>
        <Outlet context={[inCart, setInCart]} />
      <Footer />
    </>
)
}

export default App
