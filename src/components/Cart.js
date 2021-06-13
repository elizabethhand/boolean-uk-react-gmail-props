import { cartItems } from './Store.js'
import { react } from 'react'

function Cart() {

    return (
        <div id="cart">
            <h2> Cart</h2>
            <div className="cart--item-list-container cart--item-list">
                <li>
                    <img
                        className="cart--item-icon"
                        src="assets/icons/001-beetroot.svg"
                    />
                    <p>beetroot</p>
                    <button className="quantity-btn remove-btn center">-</button>
                    <span className="quantity-text center">1</span>
                    <button className="quantity-btn add-btn center">+</button>
                </li>

            </div>
        </div>
    )
}

export default Cart