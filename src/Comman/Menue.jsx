import React, { useState } from 'react';
import { AiOutlineFileExclamation } from 'react-icons/ai';

const initialMenus = [
  { name: 'Paneer Butter Masala', price: '250/-', image: 'https://images.unsplash.com/photo-1576567529374-2566c9f2b6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' }
];

const Menue = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: '', price: '', image: '' });
  const [menuItems, setMenuItems] = useState(initialMenus);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu({ ...newMenu, [name]: value });
  };

  const addMenu = () => {
    setMenuItems([...menuItems, newMenu]);
    setShowForm(false);
    setNewMenu({ name: '', price: '', image: '' });
  };

  return (
    <div style={{ width: '100%', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <AiOutlineFileExclamation size={30} />
        <p style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold' }}>Total Orders</p>
      </div>

      <p style={{ fontSize: '20px', marginBottom: '20px' }}>546</p>

      <button
        style={{
          backgroundColor: '#3182CE',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Add Menu Form' : 'Add Menu'}
      </button>

      {showForm && (
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="name"
            placeholder="Menu Name"
            value={newMenu.name}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newMenu.price}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newMenu.image}
            onChange={handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            onClick={addMenu}
            style={{ backgroundColor: '#3182CE', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
          >
            Add
          </button>
        </div>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Image</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Menu Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', borderRadius: '8px' }} />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menue;
