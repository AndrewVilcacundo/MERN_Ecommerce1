import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import allProducts from '../Components/Assets/all_product.js'; // Ajusta la ruta según la ubicación de tu archivo

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Actualiza el estado con los productos importados
    setAllProducts(allProducts);
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Mostrando los siguientes productos.</span> </p>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
