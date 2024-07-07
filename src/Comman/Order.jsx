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
    <div>
      <h1>Recent Order Requests</h1>

      <button onClick={() => setShowForm(!showForm)}>Add New Order</button>

      {showForm && (
        <div>
          <input type="text" name="orderName" placeholder="Order Name" value={newOrder.orderName} onChange={handleInputChange} />
          <input type="text" name="customerName" placeholder="Customer Name" value={newOrder.customerName} onChange={handleInputChange} />
          <input type="text" name="price" placeholder="Price" value={newOrder.price} onChange={handleInputChange} />
          <button onClick={addOrder}>Submit</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Order Name</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderName}</td>
              <td>{order.customerName}</td>
              <td>{order.price}</td>
              <td>
                <button 
                  className={`bg-${order.status === 'Pending' ? 'red' : 'green'}-300 rounded-3xl m-2`}
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
