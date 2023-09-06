import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import MenShirt from './pages/MenShirt';
import ProductPage from './pages/ProductPage';
import MenFashion from './pages/MenFashion';
import VendorPage from './pages/VendorPage';
import PaymentPage from "./pages/PaymentPage";
// comment out every component you are not working on. Example, if you are working on navbar and header, comment out the rest and leave the components you are working on. this will prevent you from having to see the codes in them while you work and your task. exmple is how i comment out the SignUp(an example)

function App() {
  return <div>
    
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    <Home/>
    {/* <MenFashion/> */}
    {/* <MenShirt/> */}
    {/* <ProductPage/> */}
    {/* <VendorPage/> */}
    {/* <PaymentPage/> */}
    

  </div>
  
}



export default App;

// ignore the code below for now
{/* <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/menfashion" element={<MenFashion />} />
          <Route path="/menshirt" element={<MenShirt />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/vendorpage" element={<VendorPage />} />
        </Routes>
</Router> */}