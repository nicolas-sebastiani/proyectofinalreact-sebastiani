import Item from "./Item"

const ItemList = ( {productos, titulo} ) => {
    return (
        <>
            <h2 className="text-gray-300 text-5xl font-mono text-center mt-5">{titulo}</h2>

            <div className="flex flex-wrap w-full gap-4 justify-around">
                {productos.map((producto) => <Item producto={producto} key={producto.id}/>)}
            </div>
        </>
    )
}

export default ItemList