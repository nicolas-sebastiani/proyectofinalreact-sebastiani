import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart2 = () => {

    const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext)
    
    return (
        <div className="h-screen pt-20">
            <h1 className="mb-10 text-center text-5xl font-mono text-gray-200">Carrito</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:mx-10">
                <div className="md:w-2/3">
                    {
                    carrito.map((prod) => (
                        <div key={prod.id} className="mx-auto max-w-5xl justify-center px-6 md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-full">
                                <div className="justify-between mb-6 rounded-lg bg-[#0d212e] p-6 shadow-md sm:flex sm:justify-start">
                                    <img src={prod.image} alt="product-image" className="w-full rounded-lg sm:w-40 hover:scale-105 transitio duration-300" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-200">{prod.brand}</h2>
                                            <h2 className="text-lg font-bold text-gray-200">{prod.product_name}</h2>
                                            <p className="mt-1 text-sm text-gray-300">{prod.description}</p>
                                            <p className="text-sm mt-5 text-gray-300">Cantidad: {prod.cantidad} x ${prod.price}</p>
                                        </div>
                                            <div className="flex items-center space-x-4 justify-around space-y-4 ">
                                                <button className='text-red-500 transition duration-300 hover:scale-105' onClick={() => removeItem(prod.id)}>
                                                    ELIMINAR
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
                <div className="mt-6 h-full rounded-lg border bg-[#0d212e] p-6 shadow-md md:w-1/3 md:mt-0">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-200">Subtotal</p>
                        <p className="text-gray-200">{new Intl.NumberFormat('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0, 
                        }).format(precioTotal())}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-300">Envio</p>
                        <p className="text-green-600">Gratis</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-gray-200">Total</p>
                        <div className="text-gray-200">
                            <p className="mb-1 text-lg font-bold">{new Intl.NumberFormat('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0, 
                        }).format(precioTotal())}</p>
                            <p className="text-sm text-gray-200">incluye IVA</p>
                        </div>
                    </div>
                    <Link to="/checkout">
                        <button className="mt-6 w-full rounded-md bg-slate-950 py-1.5 font-medium text-blue-50 hover:bg-slate-800">Check out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
    
}

export default Cart2