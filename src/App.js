import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Publishandschdule from "./components/Publishandschdule";
import Socialmedia from "./components/Socialmedia";
import Sociallistening from "./components/Sociallistening";
import AIcontentcreation from "./components/AIcontentcreation";
import Engagementtools from "./components/Engagementtools";
import Inboxandmessaging from "./components/Inboxandmessaging";
import Employeeadvocacy from "./components/Employeeadvocacy";
import Socialadvertising from "./components/Socialadvertising";
import Besttimestopost from "./components/Besttimestopost";
import LoginPage from "./components/LoginPage";
import PricingPlans from "./components/PricingPlans"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Publishandschdule/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<Publishandschdule />} />
        <Route path="/social" element={<Socialmedia />} />
        <Route path="/sociallistening" element={<Sociallistening />} />
        <Route path="/aicontentcreation" element={<AIcontentcreation />} />
        <Route path="/engagementtools" element={<Engagementtools />} />
        <Route path="/inboxandmessaging" element={<Inboxandmessaging />} />
        <Route path="/employeeadvocacy" element={<Employeeadvocacy />} />
        <Route path="/socialadvertising" element={<Socialadvertising />} />
        <Route path="/besttimestopost" element={<Besttimestopost />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/PricingPlans" element={<PricingPlans />} />
      </Routes>
    </div>
  );
}

export default App;
