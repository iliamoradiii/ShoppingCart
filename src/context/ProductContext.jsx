import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';

const ProductContext = createContext();

function ProductProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get("/products"));
            } catch (error) {
                console.log(error.message)
            }
        };
        fetchProducts()
    },[])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => { // به جای اینکه توی صفحه ی محصولات ازش استفاده کنیم اینجا فانکشنش کردیم
    const products = useContext(ProductContext);
    return products;
}
// حاصل این فانکشن میشه دیتا ی مورد نظر ما ، محصولات مورد نظر ما

const useProductDetails = (id) => {
    const products = useContext(ProductContext);
    const result = products.find(product => product.id === id);
    return result;
}



export default ProductProvider
export {useProducts, useProductDetails}
