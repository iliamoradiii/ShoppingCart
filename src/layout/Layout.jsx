import { Link } from "react-router-dom"
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { useCard } from "../context/CartContext"
import styles from "./Layout.module.css"

function Layout({children}) {
    const [state]  = useCard();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
            <div>
                <PiShoppingCartSimpleBold />
                { !!state.itemsCounter && <span>{ state.itemsCounter }</span> }
            </div>
        </Link>
      </header>
      { children }
      <footer className={styles.header}>Developed By ilia by love</footer>
    </>
  )
}

export default Layout
