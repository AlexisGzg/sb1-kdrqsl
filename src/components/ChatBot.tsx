import React, { useState } from 'react'
import { X } from 'lucide-react'

const ChatBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy el asistente virtual de Nike. ¿En qué puedo ayudarte?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      // Simular respuesta del bot
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Gracias por tu mensaje. Un representante de atención al cliente se pondrá en contacto contigo pronto.', sender: 'bot' }])
      }, 1000)
    }
  }

  return (
    <div className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="text-lg font-semibold">Chat de Asistencia</h3>
        <button onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot