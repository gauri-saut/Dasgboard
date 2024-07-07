import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import { Header } from './Component/Header';
import Main from './Component/Main';
import CustomerReviews from './Comman/CustomerReviews';
import Boxmodel from './Component/Boxmodel';
import Order from './Comman/Order';
import Orderlist from './Comman/Orderlist';
import Analytics from './Comman/Analytics';
import Menue from './Comman/Menue';
import Table from './Comman/Table';
import Login from './Component/Login';
import ProtectedRoute from './Component/ProtectedRoute';
import Customer from './Comman/Customer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Boxmodel />
                </ProtectedRoute>
              }

            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Main />
                </ProtectedRoute>
              } />

             
            <Route
              path="/CustomerReviews"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CustomerReviews />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Orders"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Orderlist"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Orderlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Analytics"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Menue"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Menue />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Table"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Table />
                </ProtectedRoute>
              }
            />
         

          <Route
              path="/Customer"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Customer />
                </ProtectedRoute>
              }
            />
          </Routes>

          
        </div>
      </div>
    </Router>
  );
};

export default App;
