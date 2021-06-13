import { useState } from 'react'

function Store(props) {

    const [cartItems, setCartItems] = useState([])


    const addToCart = e => {
        setCartItems(cartItems => [...cartItems, {
            name: e.target.value,
            quantity: 1
        }])
    }


    return (
        <div id="store">
            <h1> Store</h1>
            <ul className="store--item-list" >
                {props.products.map(product => (
                    <li>
                        {product.name}
                        {<img src={"./assets/{product.id}.svg"} />}
                        {<button value={product.name} onClick={addToCart}> Add to cart</button>}

                    </li>
                )

                )}

            </ul>
        </div>
    )
}

export default Store
export { cartItems }