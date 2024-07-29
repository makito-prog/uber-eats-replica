import './App.css';
import { Foods } from './containers/Foods';
import { Orders } from './containers/Orders';
import { Restaurants } from './containers/Restaurants';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:restaurantsId/foods" element={<Foods />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
