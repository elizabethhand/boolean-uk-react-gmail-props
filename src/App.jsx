import "./index.css";
import { useState } from 'react'
import Store from './components/Store.js'
import Cart from './components/Cart.js'
import Total from './components/Total.js'



export default function App() {

  const items = [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: "0.35"
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: "0.20"
    },
    {
      id: "003-apple",
      name: "apple",
      price: "0.50"
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: "0.60"
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: "1.10"
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: "0.20"
    },
    {
      id: "007-bell-pepper",
      name: "bell-pepper",
      price: "0.60"
    },
    {
      id: "008-berry",
      name: "berry",
      price: "2.25"
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: "3.00"
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: "1.10"
    }
  ]

  const [products, setProducts] = useState(items)


  return (
    <div className="App">
      <main>
        <Store
          products={products}
        />
        <Cart />
        <Total />

      </main>
    </div>
  )
};

