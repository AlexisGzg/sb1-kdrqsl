import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ChatBot from './components/ChatBot'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nike Store (Ficticio)</h1>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
                <li><a href="#" className="hover:text-gray-300">Productos</a></li>
                <li><a href="#" className="hover:text-gray-300">Sobre Nosotros</a></li>
              </ul>
            </nav>
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Aviso Importante</p>
          <p>Este es un proyecto escolar y no realiza ventas reales. Todos los productos y transacciones son ficticios.</p>
        </div>

        <ProductList addToCart={addToCart} />
      </main>

      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} items={cartItems} removeFromCart={removeFromCart} />
      
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Chat
      </button>

      <Footer />
    </div>
  )
}

export default App