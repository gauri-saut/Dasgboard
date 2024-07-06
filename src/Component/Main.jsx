import React from 'react'
import Menue from '../Comman/Menue'
import Boxmodel from './Boxmodel'

const Main = () => {
  return (
    <div>

       <div className=' p-4flex justify-between items-center bg-white shadow-md' style={{marginLeft:"19rem"}}>

       <h4>Dashboard</h4>
       <p>Wellcome to Lojusa Admin</p>
       <Menue/> 
       <Boxmodel/>
       </div>

    

    </div>
  )
}

export default Main


