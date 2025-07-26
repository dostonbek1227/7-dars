import React from 'react'

export default function Card() {
  return (
    <div className='container c-content'>
      <div className='biznes1'>
         <p className='biznes'>Find a better card deal in few easy steps.</p>
         <p className='biznes-p'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
         <button className='button-b' >Get Started</button>
       </div> 
       <div className='card img'>
        <img className='img1'src="./img/scan-credit-crds.png" alt="" />
          <img className='img2'src="./img/online analysis.png" alt="" />
          <img className='img3'src="./img/pay-method.png" alt="" />
       </div>
    </div>
  );
}
