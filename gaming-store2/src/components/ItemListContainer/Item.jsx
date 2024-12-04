import { Link } from "react-router-dom";

export default function Item({producto}) {

    return (
            <>
            <div className="flex min-h-72">
                    <div className="max-w-[720px] mx-auto">
                        <div className="block mb-4 mx-auto pb-2 max-w-[360px]">
                        </div>
                        <div className="relative flex flex-col text-gray-300 bg-gray-800 shadow-md bg-clip-border w-96">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-800 bg-clip-border rounded-xl h-60">
                                <Link to={`/item/${producto.id}`}>
                                    <img
                                        src={producto.image}
                                        alt="card-image" className="object-scale-down w-full h-full transition duration-500 hover:scale-105" 
                                    />
                                </Link>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="block font-mono text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {producto.product_name}
                                    </p>
                                    <p className="text-gray-300 text-sm font-mono">
                                        Precio Total: {new Intl.NumberFormat('es-AR', {
                                            style: 'currency',
                                            currency: 'ARS',
                                            minimumFractionDigits: 0, 
                                            maximumFractionDigits: 0, 
                                        }).format(producto.price)}
                                    </p>
                                </div>
                                <p className="block font-mono text-sm antialiased font-normal leading-normal text-gray-300 opacity-75">
                                    Fabricante: {producto.brand}
                                </p>
                            </div>
                            <div className="p-6 pt-0 place-items-end h-full">
                                <Link to={`/item/${producto.id}`}>
                                    <button
                                        className="font-mono font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-m py-3 px-6 rounded-lg shadow-gray-600 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        type="button">
                                        Mas detalles
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
            </>
            )
}
