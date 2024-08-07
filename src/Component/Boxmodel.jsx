import React from 'react'
import DemoChart from '../components/DemoChart'
import ProductChart from '../components/ProductChart'
import Vchart from '../components/Vchart'

const Boxmodel = () => {
  return (

<div>

    <div className='flex bg-slate-400 'style={{width:"100%", justifyContent:'space-between', }}>

    <div className="first" style={{width:"150px",borderRadius:"15px",height:"100px" ,backgroundColor:"white", margin: "20px", padding:"1rem" }}>
        <img src="" alt="" />
        <p>2560</p>
        <p>Total Menue</p>

    </div>


    <div className="second" style={{width: "130px", borderRadius:"13px", height:"100px", background:"white" , margin: "20px", padding:"1rem"}}> 
        <img src="" alt="" />
        <p>$87,256</p>
        <p>Total Revnew</p>

    </div>



    <div className="three" style={{width: "130px", borderRadius:"13px", height:"100px", background:"white" , margin: "20px", padding:"1rem"}}>
    <img src="" alt="" />
        <p>2560K</p>
        <p>Total Customer</p>

    </div>



    <div className="first" style={{width:"150px",borderRadius:"15px",height:"100px" ,backgroundColor:"white" , margin: "20px", padding:"1rem"}}>
        <img src="" alt="" />
        <p>2560</p>
        <p>Total Menue</p>

    </div>



</div> 
<div className='flex'>
<div className='m-10 p-2 bg-slate-300 h-[30rem] w-[30rem] rounded-2xl '> <DemoChart/></div>
<div className='m-10 p-2 bg-slate-300 h-[30rem] w-[30rem] rounded-2xl'> <ProductChart/> </div>
</div>
<div className='m-10 p-2 bg-slate-300 h-[25rem] w-[50rem] rounded-2xl'> <Vchart/></div>

    </div>
  )
}

export default Boxmodel