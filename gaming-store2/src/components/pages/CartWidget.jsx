import { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWitged = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <Link to="/cart" className='flex text-xs font-medium mt-10 hover:text-gray-100 mr-5'>
            <IoIosCart className="cart-widget"/>
            <span> {cantidadEnCarrito()}</span>
        </Link>
    )
}

export default CartWitged