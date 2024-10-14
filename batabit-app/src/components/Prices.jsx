import React from 'react'
const Prices = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Escoge el plan que mejor se ajuste a ti.
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Cualquier plan te da acceso completo a nuestra plataforma.
        </p>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Recomendado
            </span>
          </div>
          
          <h2 className="text-xl font-semibold text-center mb-4">Pago Anual</h2>
          
          <div className="text-center mb-4">
            <span className="text-6xl font-bold">$99</span>
          </div>
          
          <p className="text-center text-sm text-gray-600 mb-6">
            *Ahorras $129 comparado al plan mensual.
          </p>
          
          <button className="w-full border-2 border-orange-500 text-orange-500 font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-orange-50 transition duration-300">
            Escoger este
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Prices