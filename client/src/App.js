import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Stores from "./pages/Stores";
import StoreItems from "./pages/StoreItems";
import Item from "./pages/Item"
import New from "./pages/New";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stores" element={<Stores />}/>
        <Route path="/stores/:store_id/items" element={<StoreItems />}/>
        <Route path="/stores/:store_id/items/:item_id" element={<Item />}/>
        <Route path="/stores/:store_id/items/new" element={<New />}/>
      </Routes>
    </Router>
  );
}

export default App;
