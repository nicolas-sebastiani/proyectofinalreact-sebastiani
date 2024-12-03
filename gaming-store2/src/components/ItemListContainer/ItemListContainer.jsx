import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import { db } from "../../services/firebase/index.js"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Todos los Productos")
    const category = useParams().category

    useEffect(() => { 

        const productosRef = collection(db, "products")
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

        getDocs(q)
        .then ((response) => {
            setProductos(
                response.docs.map((doc) => {
                    // setTitulo(category)
                    return { ...doc.data(), id: doc.id}
                })
            )
        })

    }, [category])

    return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    )
}

export default ItemListContainer