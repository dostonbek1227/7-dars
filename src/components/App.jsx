import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import User from "./User";
import Biznes from "./Biznes";
import Paypal from "./Paypal";
import Card from "./Card";
import People from "./People";
import Box from "./Box";
import Now from "../Now";
export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <User />
      <Biznes /> 
      <Paypal/> 
      <Card/>
      <People/>
      <Box/>
      <Now/>
    </div>
  );
}
