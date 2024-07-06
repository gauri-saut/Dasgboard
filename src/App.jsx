import React from "react";
import Sidebar from "./Component/Sidebar";
import { Header } from "./Component/Header";
import Main from "./Component/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerReviews from "./Comman/CustomerReviews";
import Boxmodel from "./Component/Boxmodel";
import Order from "./Comman/Order";
import Orderlist from "./Comman/Orderlist";
import Analytics from "./Comman/Analytics";
import Menue from "./Comman/Menue";
import Table from "./Comman/Table";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route path="/cart" element={<cart />} />
            <Route path="/CustomerReviews" element={<CustomerReviews />} />
            <Route path="/" element={<Boxmodel />} />
            <Route path="/Orders" element={<Order />} />
            <Route path="/Orderlist" element={<Orderlist />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Menue" element={<Menue />} />
            <Route path="/Table" element={<Table />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
