import React from 'react'

const Order = () => {
  return (
    <div>
        <h1>Recnet order Request</h1>

<table>


<thead>

  <tr>
    <th>Order name</th>
    <th>Customer name</th>
<th>Price</th>
<th>Order status</th>
  </tr>

</thead>

<tbody>

  <tr>
    <td> sweet</td>
    <td> Ajit kumar</td>
    <td> 250/-</td>
   <button className='bg-red-300 rounded-3xl m-2'>
    <td>pending</td>

    </button> 

  </tr>

  
<tr> 
  <td>panner cheez</td>
  <td>Gauri Saut </td>
  <td>350/-</td>
  <button className='bg-red-300 rounded-3xl m-2'><td>Delivered</td></button>
  
</tr>

<tr>
  <td>Sezeler </td>
  <td>Park Sing</td>
  <td>2500/-</td>
  <button className='bg-red-300 rounded-4xl m-2'><td>Pending</td></button>
</tr>
</tbody>

</table>


    </div>
  )
}

export default Order