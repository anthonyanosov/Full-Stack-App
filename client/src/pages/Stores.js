import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/stores`)
      .then((body) => body.json())
      .then((json) => setStores(() => [...json]));
  }, []);

  return (
    <>
      <h1>Stores</h1>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>
            <Link to={`/stores/${store._id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Stores;
