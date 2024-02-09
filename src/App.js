import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Ecolodge from "./pages/Ecolodge/Ecolodge";
import Activities from "./pages/Activities/Activities";
import Register from "./components/Register/Register";
import LogIn from "./components/LogIn/LogIn";
import NotLoggedIn from "./components/loggedIn/NotLoggedIn";
import IsLoggedIn from "./components/loggedIn/IsLoggedIn";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Put Your Layout here */}
        {/* This is Part To Show How Links Work */}
        <div>
         <Header/>
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<IsLoggedIn><HomePage /></IsLoggedIn>} />
            <Route path="/ecolodge" element={<IsLoggedIn><Ecolodge/></IsLoggedIn> } />
            <Route path="/activities" element={<IsLoggedIn><Activities/></IsLoggedIn> } />
            <Route path="*" element={"Page 404"} />
            <Route path="/sign-up" element={<NotLoggedIn> <Register/> </NotLoggedIn> }/>
            <Route path="/log-in" element={<NotLoggedIn> <LogIn/></NotLoggedIn>}/>
            <Route path="/privacy-policy" element={<IsLoggedIn><PrivacyPolicy/></IsLoggedIn>} />
            <Route path="/contact-us" element={<IsLoggedIn><ContactUs/> </IsLoggedIn>} />
            <Route path="/about-us" element={ <IsLoggedIn><AboutUs/></IsLoggedIn>} />
          </Route>
        </Routes>
        <Outlet />
          <div>
        <Footer/>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
