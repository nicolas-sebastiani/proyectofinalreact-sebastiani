import Navbar from './components/Header/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
import Login from './components/pages/Login'
import Cart from './components/pages/Cart'
import Cart2 from './components/pages/Cart2'
import CheckOut from './components/pages/CheckOut'
import "./styles.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
      <>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/:category" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/login" element={<Login/>}/>
              {/* <Route path="/cart" element={<Cart/>}/> */}
              <Route path="/cart" element={<Cart2/>}/>
              <Route path="/checkout" element={<CheckOut/>}/> 
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </>
    )
}