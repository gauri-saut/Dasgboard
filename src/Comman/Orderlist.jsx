import React from 'react'

const Orderlist = () => {
  return (
    <div>

    <table>
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Amount</th>
                <th>Status Order</th>
            </tr>

                <tr>
                <td>#01234</td>
                <td>21 june 2024, 12:45AM</td>
                <td>Park Shing</td>
                <td>35 Station Rode pune</td>
                <td>$83.45</td>
              <button className='bg-red-300 rounded-3xl m-2'><tr>New Order</tr></button>
                </tr>

                <tr>
                    <td>#02345</td>
                    <td>1 june 2024, 1:45AM</td>
                    <td>Abhay Shing</td>
                    <td>35 Station Rode pune</td>
                    <td>$83.45</td>
                    <button className='bg-red-300 rounded-3xl m-2'><tr>On deleviry</tr></button>

                </tr>

                <tr>
                    <td>#05678</td>
                    <td>6 june 2024, 1:45AM</td>
                    <td>Atul Kaliya</td>
                    <td>35 Station Rode pune</td>
                    <td>$83.45</td>
                    <button className='bg-red-300 rounded-3xl m-2'><tr>Order Reached</tr></button>

                </tr>

                <tr>
                    <td>#07890</td>
                    <td>23 june 2024, 1:45AM</td>
                    <td>Tnmay Kate</td>
                    <td>35 Station Rode pune</td>
                    <td>$83.45</td>
                    <button className='bg-red-300 rounded-3xl m-2'><tr>On deleviry</tr></button>

                </tr>
        </thead>
            
    </table>

    </div>
  )
}

export default Orderlist