import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Footer from "./component/hotel/Footer";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/hotel/Navbar";
import ContactUs from "./component/hotel/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/about-us" Component={About} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
