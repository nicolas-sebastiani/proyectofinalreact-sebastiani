import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function CheckOut() {

    const [ pedidoId, setPedidoId ] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(order)

        const pedidosRef = collection(db, "orders")

        addDoc(pedidosRef, order)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h3 className="text-gray-300 text-3xl font-mono m-3">Muchas gracias por tu compra!</h3>
                <p className="text-gray-300 text-xl font-mono m-3">Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="h-screen grid grid-cols-3 mt-5">
        <div className="lg:col-span-2 col-span-3 space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-[#0d212e] shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3 text-gray-200">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-200 mt-4 sm:mt-0 sm:ml-4">Completa con la informacion de envio y pago</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-200 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <form method="POST" action="" onSubmit={handleSubmit(comprar)}>
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-200 my-2">Informacion de envio</h2>
                        <fieldset className="mb-3 bg-[#0d212e] shadow-lg rounded text-gray-200">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Nombre</span>
                                <input className="focus:outline-none px-3 bg-transparent" placeholder="Nicolas Sebastiani" required="" {...register("nombre")}/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input type="email" className="focus:outline-none px-3 bg-transparent" placeholder="nombre@gmail.com" required="" {...register("email")}/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Direccion</span>
                                <input className="focus:outline-none px-3 bg-transparent" placeholder="Calle Falsa 123" {...register("direccion")}/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Ciudad</span>
                                <input className="focus:outline-none px-3 bg-transparent" placeholder="Villa Constitucion" {...register("ciudad")}/>
                            </label>
                            <label className="inline-flex w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2">Provincia</span>
                                <input className="focus:outline-none px-3 bg-transparent" placeholder="Santa Fe" {...register("provincia")}/>
                            </label>
                            <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200">
                                <span className="text-right px-2 xl:px-0 xl:text-none">CP</span>
                                <input className="focus:outline-none px-3 bg-transparent" placeholder="2919" {...register("cp")}/>
                            </label>
                            <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span className="text-right px-2">Pais</span>
                                <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                    <select name="country" className="border-none bg-[#0d212e] flex-1 cursor-pointer appearance-none focus:outline-none">
                                        <option value="BR">Brasil</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="PA">Paraguay</option>
                                        <option value="AR" defaultValue="selected">Argentina</option>
                                    </select>
                                </div>
                            </label>
                        </fieldset>
                    </section>
                        <div className="rounded-md">
                            <section>
                                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-200 my-2">Informacion de pago</h2>
                                <fieldset className="mb-3 shadow-lg rounded bg-[#0d212e] text-gray-200">
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Tarjeta</span>
                                        <input className="focus:outline-none px-3 w-full bg-transparent" placeholder="Numero MM/YY CVC" required="" {...register("tarjeta")}/>
                                    </label>
                                </fieldset>
                            </section>
                        </div>
                        <button type="submit" className="submit-button px-4 py-3 rounded-full bg-[#0d212e] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors hover:scale-105">
                                <p>
                                    Pagar {new Intl.NumberFormat('es-AR', {
                                        style: 'currency',
                                        currency: 'ARS',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0, 
                                    }).format(precioTotal())}
                                </p>
                        </button>
                </form>
            </div>
        </div>
        <div className="col-span-1 bg-[#0d212e] lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-200 px-8">Productos en tu Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <ul className="py-6 border-b space-y-6 px-8 ">
                            <li className="grid grid-cols-6 gap-2 border-b-1">
                                <div className="col-span-1 self-center">
                                    <img src={prod.image} alt="Product" className="rounded w-full"/>
                                </div>
                                <div className="flex flex-col col-span-3 pt-2">
                                    <span className="text-gray-200 text-md font-semi-bold">{prod.product_name}</span>
                                    <span className="text-gray-400 text-sm inline-block pt-2">{prod.description}</span>
                                </div>
                                <div className="col-span-2 pt-3">
                                    <div className="flex items-center space-x-2 text-sm justify-between">
                                        <span className="text-gray-500">{prod.cantidad} x ${prod.price}</span>
                                        <span className="text-gray-200 font-semibold inline-block">${prod.cantidad * prod.price}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    ))
            }
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-200">
                    <span>Subtotal</span>
                    <span className="font-semibold text-green-600"><p>
                        {new Intl.NumberFormat('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0, 
                        }).format(precioTotal())}
                    </p></span>
                </div>
                <div className="flex justify-between py-4 text-gray-200">
                    <span>Envio</span>
                    <span className="font-semibold text-green-500">Gratis</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-200">
                <span>Total</span>
                <span>
                    <p>
                        {new Intl.NumberFormat('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0, 
                        }).format(precioTotal())}
                    </p>
                </span>
            </div>
        </div>
    </div>
    )
}