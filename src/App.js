import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
