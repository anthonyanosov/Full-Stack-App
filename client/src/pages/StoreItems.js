import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function StoreItems() {
  const { store_id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/stores/${store_id}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json]));
  }, [store_id]);

  return (
    <>
      <h1>Store Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link to={`/stores/${store_id}/items/${item._id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StoreItems;
