import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import { db } from '../../services/firebase/index.js'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        // const docRef = doc(db, "productos", id);
        getDoc(doc(db, "products", id))
            .then((resp) => {
                // console.log(resp.price)
                    setItem(
                        { ...resp.data(), id: resp.id }
                    )
                })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer