import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad +1)
    }
    console.log({item})
    return (
        <>
        <div className="flex min-h-full">
                <div className="max-w-full mx-auto">
                    <div className="block mb-4 mx-auto pb-2 max-w-full">
                </div>
                    <div className="relative flex flex-col w-full text-gray-300 bg-gray-800 shadow-md bg-clip-border rounded-xl">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-500 bg-clip-border rounded-xl h-96">
                            <img
                                src={item.image}
                                alt="card-image" className="object-cover object-top w-full h-full transition duration-500 hover:scale-105" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-mono text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                                    {item.product_name}
                                </p>
                            </div>
                            <p className="mb-3">
                                Descripcion: {item.description}
                            </p>
                            <h3 className="text-gray-300 text-xl font-mono font-light mb-3">
                                Precio: {new Intl.NumberFormat('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS',
                                    minimumFractionDigits: 0, 
                                    maximumFractionDigits: 0, 
                                }).format(item.price)}
                            </h3>
                                <ItemCount  
                                    cantidad={cantidad} 
                                    handleSumar={handleSumar} 
                                    handleRestar={handleRestar}
                                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }} 
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail