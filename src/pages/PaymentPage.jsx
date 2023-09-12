import React from 'react'
import '../assets/style.css'
import ecoMarketLogo from '../assets/blessing_images/eco-market-logo.svg'
import Arrow from '../assets/blessing_images/arrow-down.svg'
import Paypal from '../assets/blessing_images/paypal.svg'


const  PaymentPage = () => {
    return (
      <div>

        <body className='bg-[#EFF2F6] h-screen'>
          

        <header className='xl:flex xl:justify-between xl:px-[100px]'>
          <div className='xl:mt-[70px]'>
            <img src={ecoMarketLogo} alt=""/>
          </div>
          <div className='xl:mt-[70px]'>
            <p className='xl:text-[20px] font-["Inter"] font-[400] text-[#5e4f4f]'>Do you have an account?<span className='font-["Roboto"] font-[500] text-[#007D6E] pl-[10px]'><a href="#">Login</a></span></p>
          </div>
        </header>

        <main className='xl:px-[100px] xl:mt-[70px]'>

        <h1 className='font-["Poppins"] font-[500] xl:text-[32px] mb-[30px]'>Shipping Details</h1>
        <div className='flex flex-col'>
          <label htmlFor="name">
            <input type="text" placeholder='First Name' className='rounded-[5px] py-[8px] pr-[150px] pl-[5px]' />
            <input type="text" placeholder='Last Name' className='ml-[10px] rounded-[5px] py-[8px] pr-[150px] pl-[5px]' />
          </label>

          <label htmlFor="phone-number">
          <input type="text" placeholder='Phone Number' className='rounded-[5px] py-[8px] pr-[495px] pl-[5px] mt-[10px]' />
          </label>

          <label htmlFor="address">
          <input type="text" placeholder='Delivery Address' className='rounded-[5px] py-[8px] pr-[495px] pl-[5px] mt-[10px]' />

          <div>
            <select className='rounded-[5px] py-[8px] pr-[50px] pl-[5px] mt-[10px]'>
            <option value="" disabled selected className='font[300] font-["Inter"] text-[#C4C4C4]'>State</option>
            <option value="Lagos">Lagos state</option>
            <option value="Ogun">Ogun state</option>
            <option value="Ondo">Ondo state</option>
            </select>           

            <input type="number" placeholder='Postal code' className='ml-[15px] rounded-[5px] py-[7px] pr-[30px] pl-[5px] mt-[10px]' /> 

            <select id="stateSelect" className='ml-[15px] rounded-[5px] py-[8px] pr-[50px] pl-[5px] mt-[10px]'>
            <option value="" disabled selected className=' font[300] font-["Inter"] text-[#C4C4C4]'>City</option>
            <option value="">Mushin</option>
            <option value="">Ikeja</option>
            <option value="">Lagos island</option>
            </select>  

          </div>


          <h2 className='font-["Poppins"] font-[500] xl:text-[32px] mb-[20px] mt-[100px]'>Delivery method</h2>

          <label id='Delivery' className='rounded-[5px] py-[15px] pr-[465px] pl-[15px] mt-[10px] bg-white'>
            <span class="circle-checkbox">
            <input type="checkbox"/>
            </span>
            <span class="text-[20px] font-['Inter'] font-[400]">Standard Delivery</span>
          </label>


          <div className='mt-[30px] flex gap-[10px]'>
            <button id='paypal' className='px-[25px] py-[5px] rounded-[5px]'>
              <img src={Paypal} alt="" />
            </button>
            <button id='paypal' className='px-[25px] py-[5px] rounded-[5px] text-[14px] font-["Public Sans"] font-[400] text-white bg-[#007D6E]'>Credit Card</button>
          </div>


          <p className='font-["Public Sans"] font-[400] text-[20px] mt-[50px]'>Payment Details</p>


          <div className='flex gap-[500px]'>
          <label htmlFor="" className='flex flex-col w-[46.5%]'>
          <input type="text" placeholder='Name' className='rounded-[5px] py-[8px] pr-[495px] pl-[5px] mt-[10px]'/>
          <input type="text" placeholder='Credit Card' className='rounded-[5px] py-[8px] pr-[495px] pl-[5px] mt-[10px]'/>
          </label>

          <button id='paypal' className='px-[45px] py-[3px] rounded-[5px] text-[20px] font-["Inter"] font-[400] text-white bg-[#007D6E] mt-[60px]'>Pay Now</button>
          </div>


          <input type="checkbox" className='mt-[30px]'/> <span className='text-[16px] font-["Inter"] font-[400]'>Save this information for future check outs</span>

       

          

          </label>



          </div>




          



        </main>






        </body>


      </div>
    )
  }
  
  export default PaymentPage;