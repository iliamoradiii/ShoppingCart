import React from 'react'
import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helpers/helper';
import styles from './SideBar.module.css'
import { listConstant } from '../constants/list';

// const categories = [
//     { id : 1, type : "All" },
//     { id : 2, type : "Electronics" },
//     { id : 3, type : "Jewelery" },
//     { id : 4, type : "Men's Clothing" },
//     { id : 5, type : "women's Clothing" },
// ]

function SideBar({setQuery, query}) {

    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
    
        if(tagName !== "LI") return;
        setQuery(query => createQueryObject(query, { category }))
    }

  return (
    <div className={styles.sidebar}>
        <div>
            <FaListUl />
            <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>

            {listConstant().map(c => 
                <li key={c.id} className={c.type.toLowerCase() === query.category ? styles.selected : null}>{c.type}</li>
            )}
        </ul>
    </div>
  )
}

export default SideBar
