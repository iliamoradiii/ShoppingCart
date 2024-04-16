import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import { useProducts } from "../context/ProductContext";
import { filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] =  useState({});

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {

    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));

  }, [products]);


  useEffect(() => {
    
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);

  }, [query]);

  

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>

          {!displayed.length && <Loader/>}

          {displayed.map(p => 
            <Card key={p.id} data={p}/>
          )}

        </div>
        <SideBar setQuery={setQuery} query={query}/>
      </div>
    </>
  )
}

export default ProductsPage
