import React from 'react'
import DemoChart from '../components/DemoChart'
import ProductChart from '../components/ProductChart'
import Vchart from '../components/Vchart'

const Analytics = () => {
  return (


    <div>
        
        <div className='m-10 '>

<div className='flex'>
<div className='m-10 p-2 bg-slate-300 h-[30rem] w-[30rem] rounded-2xl '> <DemoChart/></div>
<div className='m-10 p-2 bg-slate-300 h-[30rem] w-[30rem] rounded-2xl'> <ProductChart/> </div>
</div>
<div className='m-10 p-2 bg-slate-300 h-[25rem] w-[50rem] rounded-2xl'> <Vchart/></div>
        </div>

  

    </div>
  )
}

export default Analytics