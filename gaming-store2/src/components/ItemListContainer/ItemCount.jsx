import AddToCart from "../buttons/AddToCart"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar}  ) => {

    return (
        <>
            <div className='flex text-gray-300 text-xl p-2 mb-3'>
                <button className="text-3xl" onClick={handleRestar}>-</button>
                    <p  className="pr-5 pl-5 text-2xl">{cantidad}</p>
                <button className="text-3xl  mr-5" onClick={handleSumar}>+</button>
                <button onClick={handleAgregar}><AddToCart /></button>
            </div>
        </>
    )
}

export default ItemCount