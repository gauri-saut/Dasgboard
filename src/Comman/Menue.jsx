import React from 'react';
import { AiOutlineFileExclamation } from "react-icons/ai";



const menuItems = [
  { name: 'Paneer Butter Masala', price: '250/-', image: 'https://images.unsplash.com/photo-1576567529374-2566c9f2b6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Chicken Masala', price: '300/-', image: 'https://images.unsplash.com/photo-1606755962773-4d3a41bda2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Veg Biryani', price: '200/-', image: 'https://images.unsplash.com/photo-1586015553493-01d9ff6a9364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Chicken Biryani', price: '350/-', image: 'https://images.unsplash.com/photo-1620156202170-1bd53f3e76f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Butter Naan', price: '50/-', image: 'https://images.unsplash.com/photo-1576485421267-d0738b3b4500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Garlic Naan', price: '60/-', image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Dal Makhani', price: '150/-', image: 'https://images.unsplash.com/photo-1589965378295-681c8a711c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Palak Paneer', price: '250/-', image: 'https://images.unsplash.com/photo-1575613887842-79a1e9b8a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Paneer Tikka', price: '300/-', image: 'https://images.unsplash.com/photo-1565299523154-d02a0f4ff8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Mutton Curry', price: '400/-', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Fish Fry', price: '350/-', image: 'https://images.unsplash.com/photo-1614309029073-96e32e9f08b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Prawn Curry', price: '450/-', image: 'https://images.unsplash.com/photo-1586195845110-9e3db7fbd92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Mixed Veg Curry', price: '200/-', image: 'https://images.unsplash.com/photo-1617911543714-d93802dd84e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Aloo Gobi', price: '150/-', image: 'https://images.unsplash.com/photo-1625062474691-e30a5b07a4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  { name: 'Chole Bhature', price: '200/-', image: 'https://images.unsplash.com/photo-1571309613934-c0ba6c790f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' }
];

const Menue = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <AiOutlineFileExclamation size={30} />
        <p style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold' }}>Total Orders</p>
      </div>

      <p style={{ fontSize: '20px', marginBottom: '20px' }}>546</p>

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
