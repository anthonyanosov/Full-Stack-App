import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Stores from "./pages/Stores";
import StoreItems from "./pages/StoreItems";
import Item from "./pages/Item";
import New from "./pages/New";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/stores" element={<Stores />} />
          <Route exact path="/stores/:store_id" element={<StoreItems />} />
          <Route exact path="/stores/:store_id/items/:item_id" element={<Item />} />
          <Route exact path="/stores/:store_id/items/new" element={<New />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
