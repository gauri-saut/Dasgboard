import React, { useState } from 'react';

const Table = () => {
  const [bookedTables, setBookedTables] = useState([]);

  const handleBooking = (tableNumber) => {
    if (!bookedTables.includes(tableNumber)) {
      setBookedTables([...bookedTables, tableNumber]);
      alert(`Booking is successful for table number: ${tableNumber}`);
    } else {
      alert(`Table number ${tableNumber} is already booked.`);
    }
  };

  const buttonStyle = (tableNumber) => ({
    backgroundColor: bookedTables.includes(tableNumber) ? 'green' : 'gray',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100px', // Adjust button width as needed
  });

  return (
    <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <h2>BOOK TABLE</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tableNumber) => (
          <div key={tableNumber} style={{ margin: '10px', textAlign: 'center' }}>
            <button
              style={buttonStyle(tableNumber)}
              onClick={() => handleBooking(tableNumber)}
            >
              {tableNumber}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
