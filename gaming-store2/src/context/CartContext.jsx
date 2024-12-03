import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [] 

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad}
        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
        
        if (estaEnCarrito) {
            estaEnCarrito.cantidad += cantidad;
            } else {
            nuevoCarrito.push(itemAgregado)
            }
            setCarrito(nuevoCarrito)
        }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acumulador, producto) => acumulador + Number(producto.price) * Number(producto.cantidad), 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const removeItem = (id) => {
        const cartUpdated = carrito.filter(producto => producto.id !== id)
        setCarrito(cartUpdated)
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, removeItem} }>
            {children}
        </CartContext.Provider>
    )
}