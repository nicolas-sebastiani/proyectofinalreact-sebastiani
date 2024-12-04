import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import Loader from "../Loaders/Loader.jsx"
import { db } from "../../services/firebase/index.js"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Todos los Productos")
    const [isLoading, setIsLoading] = useState(true)
    const category = useParams().category

    useEffect(() => { 
        setIsLoading(true)
        const productosRef = collection(db, "products")
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;
        
        getDocs(q)
        .then ((response) => {
            setProductos(
                response.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [category])

    return (
    <div>
        {isLoading ? <Loader /> : <ItemList productos={productos} titulo={titulo} />}
    </div>
    )
}

export default ItemListContainer