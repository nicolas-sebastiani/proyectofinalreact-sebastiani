import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

export default function Cart() {

    const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="container">
            <h2 className="text-gray-300 text-5xl font-mono m-3">Carrito</h2>
            {
                carrito.map((prod) => (
                    <div key={prod.key} className="w-[50rem] border-2 border-b-4 border-gray-200 rounded-xl m-4">
                        <div className="grid grid-cols-6 p-5 gap-y-2">
                                <div>
                                    <img src={prod.image} className="max-w-25 max-h-25 rounded-full" />
                                </div>
                                <div className="col-span-5 md:col-span-4 ml-4">
                                    <p className="text-sky-500 font-bold text-xl">{prod.product_name}</p>
                                    <p className="text-gray-400">Marca: {prod.brand} </p>
                                    <p className="text-gray-400">Descripcion: {prod.description} </p>
                                    <p className="text-gray-400">Cantidad: {prod.cantidad}</p>
                                </div>
                                <div className="col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                                    <p className="rounded-md text-sky-500 font-bold bg-sky-100 p-1 px-3 text-sm w-fit m-1"> 
                                        Precio Total: {new Intl.NumberFormat('es-AR', {
                                        style: 'currency',
                                        currency: 'ARS',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0, 
                                        }).format(prod.price * prod.cantidad)} 
                                    </p>
                                    <button onClick={() => removeItem(prod.id)} className="text-red-800 mt-5 bg-slate-400 rounded-xl p-2 ml-7 hover:bg-gray-200">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
            }
            {
                carrito.length > 0 ? 
                <div className="flex">
                    <h3 className="text-gray-300 text-3xl font-mono ml-3 mt-5 mr-5">
                        Precio Total: {new Intl.NumberFormat('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0, 
                        }).format(precioTotal())}
                    </h3>
                    <Link to="/checkout">
                        <button className="text-blue-800 mt-5 bg-slate-400 rounded-full p-2 hover:bg-gray-200 font-semibold ml-4">
                            Finalizar Compra
                        </button> 
                    </Link>
                    <button className="text-red-800 mt-5 bg-slate-400 rounded-full p-2 hover:bg-gray-200 font-semibold ml-4" onClick={handleVaciar}>
                        Vaciar Carrito
                    </button> 
                </div>
                :
                <h3 className="text-gray-300 text-2xl font-mono m-3">El carrito está vacío...</h3>
            }
        </div>
        )}
