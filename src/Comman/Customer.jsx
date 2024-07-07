import React, { useState } from 'react';

const Customer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', amountPaid: 500 },
    { id: 2, name: 'Jane Smith', amountPaid: 2000 },
    { id: 3, name: 'Alice Johnson', amountPaid: 300 },
    { id: 4, name: 'Bob Brown', amountPaid: 3500 },
    // Initial customers
  ]);

  

  const [newCustomerName, setNewCustomerName] = useState('');
  const [newAmountPaid, setNewAmountPaid] = useState('');

  const handleAddCustomer = () => {
    const id = customers.length + 1; // Auto-incrementing ID
    const newCustomer = {
      id,
      name: newCustomerName,
      amountPaid: parseInt(newAmountPaid), // Ensure amountPaid is parsed to integer
    };

    setCustomers([...customers, newCustomer]);
    setNewCustomerName(''); // Clear input fields after adding
    setNewAmountPaid('');
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Customers</h2>
      <div style={{ backgroundColor: '#E2E8F0', padding: '1rem', borderRadius: '0.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#CBD5E0' }}>
              <th style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>ID</th>
              <th style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>Name</th>
              <th style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>Amount Paid (INR)</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id} style={{ border: '1px solid #CBD5E0' }}>
                <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>{customer.id}</td>
                <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>{customer.name}</td>
                <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem', backgroundColor: customer.amountPaid >= 100 && customer.amountPaid <= 3000 ? '#C6F6D5' : 'transparent' }}>
                  {customer.amountPaid}
                </td>
              </tr>
            ))}
            <tr style={{ border: '1px solid #CBD5E0' }}>
              <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>{customers.length + 1}</td>
              <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>
                <input
                  type="text"
                  value={newCustomerName}
                  onChange={e => setNewCustomerName(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #CBD5E0', borderRadius: '0.25rem' }}
                  placeholder="Enter name"
                />
              </td>
              <td style={{ border: '1px solid #CBD5E0', padding: '0.75rem' }}>
                <input
                  type="number"
                  value={newAmountPaid}
                  onChange={e => setNewAmountPaid(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #CBD5E0', borderRadius: '0.25rem' }}
                  placeholder="Enter amount paid"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={handleAddCustomer}
          style={{ marginTop: '1rem', backgroundColor: '#3182CE', color: 'white', padding: '0.75rem 1rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '0.25rem', cursor: 'pointer', border: 'none' }}
        >
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default Customer;
