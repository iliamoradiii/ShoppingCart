import { Link } from "react-router-dom"
import styles from "./404.module.css"

function PageNotFound() {
  return (
    <div className={styles.container}>
      <p style={{marginLeft:"auto",marginRight:"auto",marginTop:"90px",color:""}}> Page not found ! <Link style={{color:"blue"}} to="/products">Click here to go to home page</Link></p>
    </div>
  )
}

export default PageNotFound
