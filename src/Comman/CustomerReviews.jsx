
import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    { orderId: '#0123655', date: '21 June 2020', customer: 'Kathryn Murphy', location: '35 Station Road London', totalSpent: '$83.46', lastOrderAmount: '$12.3' },
    { orderId: '#01236556', date: '21 June 2020', customer: 'Kristin Watson', location: '35 Station Road London', totalSpent: '$82.46', lastOrderAmount: '$12.3' },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Customer</h1>
       
      </div>

      <p className="text-gray-500 text-sm mb-4">Customer / Review</p>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Location</th>
            <th>Total Spent</th>
            <th>Last Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.orderId}>
              <td>{review.orderId}</td>
              <td>{review.date}</td>
              <td>{review.customer}</td>
              <td>{review.location}</td>
              <td>{review.totalSpent}</td>
              <td>{review.lastOrderAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerReviews;
