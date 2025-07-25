import React from 'react'

export default function People() {
  return (
    <div className='container content'>
  <div className='people'>
    <h2 className='p-h2'>What people are saying about us</h2>
    <p className='p-p'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
  </div>
  <div className='people1'>
   <div className='pul'>
     <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
     <div className='kenn'>
       <img src="./img/kenn.png" alt="" />
        <p>Herman Jensen</p>
        <p>Founder & Leader</p>
     </div>
   </div>
   <div className='pul1'>
     <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
     <div className='kenn'>
       <img src="./img/steve.png" alt="" />
        <p>Steve Mark</p>
        <p>Founder & Leader</p>
     </div>
   </div>
   <div className='pul2'>
     <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
     <div className='kenn'>
       <img src="./img/jensen.png" alt="" />
        <p>Herman Jensen</p>
        <p>Founder & Leader</p>
     </div>
   </div>
  </div>
    </div>
  )
}
