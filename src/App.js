import Herosection from "./pages/herosection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import Signup from "./pages/signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import Shopping from "./pages/shopping";
import Forgortpassword from "./pages/forgotpassword";
import Cart from "./pages/cart";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div>
      <Navbar userName={userName} />

      <Routes>
        {/* <Route index element={<Herosection />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="product/:id" element={<Shopping />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="forgotpassword" element={<Forgortpassword />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
