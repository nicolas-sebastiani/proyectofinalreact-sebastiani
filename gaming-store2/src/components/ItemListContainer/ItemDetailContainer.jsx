import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../Loaders/Loader.jsx"
import ItemDetail from './ItemDetail.jsx'
import { db } from '../../services/firebase/index.js'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const id = useParams().id;

    useEffect(() => {
        setIsLoading(true);
        getDoc(doc(db, "products", id))
            .then((resp) => {
                setItem(
                        { ...resp.data(), id: resp.id }
                    )
                })
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])
    
    return (
        <div>
            {isLoading ? <Loader/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer