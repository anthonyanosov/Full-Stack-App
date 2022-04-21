import { useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const { store_id } = useParams();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [storeID, setStoreID] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`localhost:8080/stores/${store_id}/items`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          quantity: quantity,
          price: price,
          storeID: storeID,
        }),
      });
      if (res.status === 200) {
        setMessage("Item has been successfully created");
      } else {
        setMessage("Error creating item");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="itemForm">
      <form onSubmit={handleSubmit}>
        <label for="name">Item name:</label><br></br>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br></br>
        <label for="quantity">Quantity:</label><br></br>
        <input type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/><br></br>
        <label for="price">Price:</label><br></br>
        <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/><br></br>
        <label for="storeID">Store ID:</label><br></br>
        <input type="text" name="storeID" value={storeID} onChange={(e) => setStoreID(e.target.value)}/><br></br>
        <button type="submit">Submit</button>
      </form>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );
}

export default App;
