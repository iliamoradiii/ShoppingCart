import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCard } from "../context/CartContext";
import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
    const [state, dispatch] = useCard();

    const clickHandler = (type, payload) => dispatch({type, payload});

    if(!state.itemsCounter) return (
      <div className={styles.container}>
        <p style={{marginLeft:"auto",marginRight:"auto"}}>Cart is empty ! <Link style={{color:"blue"}} to="/products">Click here to choose product</Link> </p>
        
      </div>
    )

    return (
        <div className={styles.container}>
          <BasketSidebar state={state} clickHandler={clickHandler}/>
          <div className={styles.products}>
            {state.selectedItems.map(product => 
                <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
            ) }
          </div>

        </div>
    )
}

export default CheckOutPage
