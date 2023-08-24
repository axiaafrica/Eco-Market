import React from 'react'
import '../assets/style.css'
import pic4 from '../assets/Love-images/Google.png'


const SignUp = () => {
  return (
    <div>
       <div class="flex flex-row">
    <div class="w-[1440px] h-[1024px] relative bg-white flex">
        <div class="w-[501px] h-[730px] left-[127px] top-[147px] absolute">
            <div class="flex flex-col gap-8">
            <div class="w-[131px] left-[186.50px] top-0 relative flex-col justify-between items-start gap-[70px] inline-flex">
                <div class="text-teal-700 text-[40px] font-semibold">Sign in </div>
            </div>
<div class="">
    <input class="border-[1px] h-[64px] border-solid border-[#E7E8E9] text-[#3F4753]
    py-3 pl-3 w-[500px]" type="text" placeholder="Email Address"/>
</div>
<div class="">
    <input class="border-[1px] h-[64px] text-[#3F4753] border-solid border-[#E7E8E9] py-3 pl-3 w-[500px]" type="text" placeholder="Email Address"/>
</div>
</div>
<div>
<div class="w-[273px] left-[115px] top-[457px] absolute text-center"><span class="text-gray-500 text-xl font-normal leading-normal">Forgot your password?</span><span class="text-gray-500 text-xl font-semibold leading-normal"> </span></div>
<div class="left-[107px] top-[705px] absolute text-zinc-900 text-lg font-normal">Privacy policy and Terms of service</div>
<div class="w-[500px] h-[152px] left-[1px] top-[281px] absolute">
    <div class="w-[500px] h-16 px-[66px] py-3 left-0 top-0 absolute bg-teal-700 rounded-[10px] justify-center items-center gap-2 inline-flex">
        <div class="text-neutral-50 text-xl font-semibold">SIGN IN</div>
</div>
<div class="w-[500px] h-16 px-[50px] py-[9px] left-0 top-[88px] absolute rounded-[10px] border border-green-900 justify-center items-center gap-4 inline-flex">
                
    <div class="w-[27.36px] h-7 relative"></div>
    <div class="flex flex-row-reverse gap-4">
    <div class="text-zinc-900 flex mr-11 text-xl font-normal"> Log in with Google</div>
    <div><img class="" src={pic4} alt=""/></div>
</div>
</div>
</div>
    </div>
</div>
<div class="w-[183px] left-[303px] top-[23px] absolute"><span class="text-black text-3xl font-bold leading-[49.41px]">eco</span><span class="text-black text-4xl font-bold leading-[49.41px]">market</span></div>
        
<div class="w-[628px] h-[1024px] left-[812px] top-0 absolute bg-green-600 bg-opacity-10">
    <div class="w-[380px] h-[168px] left-[124px] top-[364px] absolute">
        <div class="left-[42px] top-0 absolute text-zinc-900 text-[40px] font-semibold">Welcome Back!</div>
        <div class="left-0 top-[88px] absolute text-center text-zinc-900 text-[28px] font-normal">Enter your personal details<br/>and start the journey with us</div>
    </div>
    <div class="h-16 pl-[68.80px] pr-[66.72px] pt-[16.64px] pb-[17.92px] left-[200px] top-[588px] absolute rounded-[10px] border border-emerald-900 justify-center items-center inline-flex">
        <div class="w-[88.48px] h-[29.44px] text-center text-black text-xl font-semibold leading-snug">SIGN UP</div>
    </div>
 </div>
</div>
</div>
 
    </div>
   
    
  )
}

export default SignUp