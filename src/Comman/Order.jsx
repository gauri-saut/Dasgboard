import React, { useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([
    { orderName: 'Sweet', customerName: 'Ajit Kumar', price: '250/-', status: 'Pending' },
    { orderName: 'Paneer Cheese', customerName: 'Gauri Saut', price: '350/-', status: 'Delivered' },
    { orderName: 'Sezeler', customerName: 'Park Sing', price: '2500/-', status: 'Pending' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({ orderName: '', customerName: '', price: '', status: 'Pending' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const addOrder = () => {
    setOrders([...orders, newOrder]);
    setShowForm(false);
    setNewOrder({ orderName: '', customerName: '', price: '', status: 'Pending' });
  };

  const updateStatus = (index) => {
    const updatedOrders = orders.map((order, i) => 
      i === index ? { ...order, status: order.status === 'Pending' ? 'Delivered' : 'Pending' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <h1>Recent Order Requests</h1>

      <button 
        style={{
          backgroundColor: '#3182CE',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Form' : 'Add New Order'}
      </button>

      {showForm && (
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="orderName"
            placeholder="Order Name"
            value={newOrder.orderName}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={newOrder.customerName}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newOrder.price}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            onClick={addOrder}
            style={{ backgroundColor: '#3182CE', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
          >
            Submit
          </button>
        </div>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#EDF2F7' }}>Order Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#EDF2F7' }}>Customer Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#EDF2F7' }}>Price</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#EDF2F7' }}>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.orderName}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.customerName}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.price}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <button 
                  style={{
                    backgroundColor: order.status === 'Pending' ? '#FC8181' : '#68D391',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => updateStatus(index)}
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
