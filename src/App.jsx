import './App.css'
import { Header } from './components/header/Header';
import { Outlet} from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';

import { Cart } from './components/cart/Cart';




function App() {

  const [inCart, setInCart] = useState(1)

  return (
    <>
      <Header><Cart itemsInCart={inCart}/></Header>
        <Outlet context={[inCart, setInCart]} />
      <Footer />
    </>
)
}

export default App
