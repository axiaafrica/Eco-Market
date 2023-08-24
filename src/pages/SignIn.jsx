import React from 'react'
import '../assets/style.css'
import pic1 from '../assets/Love-images/Group 1992.png'
import pic2 from '../assets/Love-images/facebook.png'
import pic3 from '../assets/Love-images/twitter.png'

const SignIn = () => {
  return (
    
<div>
      <div class="flex flex-row">
      <div class="w-[1440px] flex-row h-[1024px] pr-[202px] bg-white justify-start items-center gap-[110px] flex">
       <div class=" w-[628px] h-[1024px] relative bg-green-600 bg-opacity-10 flex-col  justify-center items-center flex">
           <div class="pt-[200px] w-[459px] h-[175px] relative">
               <div class="left-0 top-[1px] absolute text-zinc-900 text-[40px] font-bold">Welcome to <span class="text-[30px] font-semibold">eco</span>market </div>
              
               <div class="left-0 top-[95px] absolute text-center text-zinc-900 text-[28px] font-normal">To keep connected with us, please<br/>login with your personal info </div>
               
           </div>
           <div class="w-56 h-16 pl-[72.16px] pr-[71.20px] pt-[16.64px] pb-[17.92px] rounded-[10px] border border-teal-700 justify-center items-center m-10 flex">
               <div class="w-[80.64px] h-[29.44px] text-center text-black text-xl font-semibold uppercase leading-snug">Sign In</div>
           </div>
       </div>
</div>
<div class="w-[500px] relative flex-col justify-center items-center gap-10 flex">
     <div class="w-[303px] flex-col justify-between items-start gap-[70px] m-10 mr-10 inline-flex">
         <div class="text-teal-700 text-[40px] font-semibold">Create Account</div>
     </div>
     <div class="flex-col justify-start items-start gap-6 flex">
         <div class="">
             <input class="border-[1px] border-solid border-[#E7E8E9] py-3 pl-3 w-[500px]" type="text" placeholder="Email Address"/>
         </div>
         <div class="">
             <input class="border-[1px] border-solid border-[#E7E8E9] py-3 pl-3 w-[500px]" type="text" placeholder="Password"/>
         </div>
         <div class="">
             <input class="border-[1px] border-solid border-[#E7E8E9] py-3 pl-3 w-[500px]" type="text" placeholder="Confirm Password"/>
         </div>
     </div>
<div class="w-[500px] h-16 px-[66px] py-3 bg-teal-700 rounded-[10px] justify-center items-center gap-2 inline-flex">
     <div class="text-neutral-50 text-xl font-semibold uppercase">Sign Up</div>
 </div>
 <div class="h-[94px] flex-col justify-start items-center gap-6 inline-flex">
     <div class="w-[352px] justify-start items-center gap-5 inline-flex">
         <div class="grow shrink basis-0 h-[0px] border border-gray-200"></div>
         <div class="text-center text-zinc-800 text-sm font-normal leading-snug">or</div>
         <div class="grow shrink basis-0 h-[0px] border border-gray-200"></div>
     </div>
     <div class="justify-start items-start gap-3.5 inline-flex">
         <div class="w-[108px] h-12 relative">
             <div class="w-[108px] h-12 left-0 top-0 absolute bg-neutral-100 rounded-md"><img src={pic1} alt="pics"/></div>
             <div class="w-5 h-5 pl-px pr-[1.68px] pt-px pb-[0.82px] left-[44px] top-[14px] absolute justify-center items-center inline-flex">
                 <div class="w-[17.32px] h-[18.18px] relative">
                 </div>
             </div>
         </div>
         <div class="w-[108px] h-12 relative">
             <div class="w-[108px] h-12 left-0 top-0 absolute bg-neutral-100 rounded-md"></div>
             <div class="w-5 h-5 left-[43.50px] top-[14px] absolute"><img src={pic2}alt="pic"/></div>
         </div>
         <div class="w-[108px] h-12 relative">
             <div class="w-[108px] h-12 left-0 top-0 absolute bg-neutral-100 rounded-md"></div>
             <div class="w-5 h-5 left-[44px] top-[14px] absolute"><img src={pic3} alt="pic"/></div>
         </div>
     </div>
 </div>
 <div class="w-[273px] text-center"><span class="text-zinc-900 text-xl font-normal leading-normal">Already a Member?</span><span class="text-gray-500 text-xl font-semibold uppercase leading-normal"> </span><span class="text-teal-700 text-xl font-semibold underline uppercase leading-normal">Sign In</span></div>
 <div class="text-zinc-900 text-lg font-normal">Privacy policy and Terms of service</div>
 </div>


</div>

</div>
    
    
  )
}

export default SignIn