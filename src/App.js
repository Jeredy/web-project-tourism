import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Products from "./pages/products/products.page";
import Services from "./pages/services/services.page";
import SignUp from "./pages/sign-up/sign-up.page";
import Footer from "./pages/footer/footer.page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
