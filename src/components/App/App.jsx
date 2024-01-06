import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "components/GlobalStyles";
import Dashboard from "pages/Dashboard/Dashboard";
import Product from "pages/Product";
import Customers from "pages/Customers";
import Income from "pages/Income";
import Promote from "pages/Promote";
import Help from "pages/Help";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Dashboard user="Evana" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};
export default App;
