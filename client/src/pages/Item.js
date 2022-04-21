import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { store_id } = useParams();
  const { item_id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/stores/${store_id}/items/${item_id}`)
      .then((body) => body.json())
      .then((json) => setItem(() => json));
  }, [store_id, item_id]);

  return (
      <>
        <h1>{item.name}</h1>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
      </>
  );
}

export default Item;
