import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Nike Store (Ficticio)</h3>
            <p className="text-sm">Este es un proyecto escolar y no realiza ventas reales.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces Rápidos</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-300">Productos</a></li>
              <li><a href="#" className="hover:text-gray-300">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <p className="text-sm">Email: info@nikestore-ficticio.com</p>
            <p className="text-sm">Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Nike Store (Ficticio). Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Desarrollado por: Alexis Giovani Gregorio Gonzalez</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer