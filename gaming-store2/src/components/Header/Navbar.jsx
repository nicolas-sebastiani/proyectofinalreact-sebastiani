import { Link } from "react-router-dom";
import CartWitged from "../pages/CartWidget";


export default function Navbar() {

    return (
            <header className="w-full mt-5 text-gray-300 bg-[#0d212e] border-gray-100 shadow-sm body-font text-lg">
                <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
                    <Link to="/" className="flex items-center mb-4 font-medium text-gray-200 title-font md:mb-0">
                        <img src="../src/assets/logo100.jpg" alt="logo" />
                    </Link>
                    <nav className="flex flex-wrap justify-center space-x-20 items-baseline pl-24 text-xl md:ml-auto md:mr-auto">
                        <Link to="/hardware" className="font-normal mt-16 transition-all hover:text-gray-100 hover:scale-105">Hardware</Link>
                        <Link to="/perifericos" className="font-normal transition-all hover:text-gray-100 hover:scale-105">Perifericos</Link>
                        <Link to="/laptops" className="font-normal transition-all hover:text-gray-100 hover:scale-105">Laptops</Link>
                    </nav>
                    <div className="place-items-end h-full flex">
                        <CartWitged/>
                        <Link to="/login"
                        className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-slate-950 rounded shadow outline-none active:bg-slate-650 hover:bg-slate-800 focus:outline-none ease">
                        Log In
                        </Link>
                    </div>
                </div>
            </header>
    )
};