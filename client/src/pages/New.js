import { useState } from "react";
import { useParams } from "react-router-dom";

function New() {
  const { store_id } = useParams();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [storeID, setStoreID] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8080/stores/${store_id}/items`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name: name,
          quantity: quantity,
          price: price,
          storeID: storeID
        }),
      });
      if (res.status === 201) {
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
        <label>Item name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
        <br></br>
        <label>Quantity: <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/></label>
        <br></br>
        <label>Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/></label>
        <br></br>
        <label>Store ID: <input type="text" value={storeID} onChange={(e) => setStoreID(e.target.value)}/></label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <div className="message"><p>{message}</p></div>
    </div>
  );
}

export default New;
