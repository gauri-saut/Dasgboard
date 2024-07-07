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
  });

  return (
    <>
      <h2>BOOK TABLE</h2>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tableNumber) => (
       
       <div className='h-[5rem] w-[2rem] mt-16'>

       <button
          key={tableNumber}
          style={buttonStyle(tableNumber)}
          onClick={() => handleBooking(tableNumber)}
          >
          {tableNumber}
        </button>
          </div>
      ))}
    </>
  );
}

export default Table;
