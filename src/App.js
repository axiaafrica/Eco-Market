import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import MenShirt from './pages/MenShirt';
import ProductPage from './pages/ProductPage';
import MenFashion from './pages/MenFashion';
import VendorPage from './pages/VendorPage';
// comment out every component you are not working on. Example, if you are working on navbar and header, comment out the rest and leave the components you are working on. this will prevent you from having to see the codes in them while you work and your task. exmple is how i comment out the SignUp(an example)

function App() {
  return <div>
    {/* <SignIn/> */}
    <SignUp/>
    <Home/>
    <MenFashion/>
    <MenShirt/>
    <ProductPage/>
    <VendorPage/>
  </div>
  
}



export default App;

// ignore the code below for now
{/* <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Profilesetting" element={<ProfileSetting />} />
          <Route path="/Passwordsetting" element={<PasswordSetting />} />
        </Routes>
      </Router> */}