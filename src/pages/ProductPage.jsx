import React from 'react'
import '../assets/style.css'

const  ProductPage = () => {
  return (
    <div class="bg-[#EFF2F6w]">
      <div class="pt-10 relative ">
        
        <div class=" absolute flex flex-row  items-center  gap-[950px] pl-[50px] top-[100px]">
            <div class="text-[40px] font-[400] text-white"> <span class="text-[60px] font-[700]">5% OFF</span></span> <br><span>ALL MEN'S</span> <br>  SUNGLASS</div>
            <div class="bg-[#007D6E] text-white inline hover:opacity-60 text-[20px] font-[600] px-14 py-3 rounded-md">Shop Now</div>
        </div>
            
    <div>
        <img class="w-full" src="/img/last-pic.svg" alt="">
    </div>
   
</div>
<div class="flex flex-row justify-center gap-[20px] px-[125px] items-end pt-[80px]">
    <div class="left-side ">
        <img src="/img/Frame 259-gc.png" alt="fashion man standing">
    </div>
    <div class="right-side flex flex-col gap-2">
        <div class="font-[700] text-[43px]">Blue Muscle Fit Long Sleeve Shirt</div>
        <div class="font-[700]">N15,000</div>
        <div class="text-[#007D6E] underline">Sold by Maddisson</div>
        <div class=" text-[#1A1A1A] text-[16px]">Size</div>
        <div class="text-[16px] flex flex-row gap-4 ">
            <div class="border-black border-[2px] py-3 px-4">S</div>
            <div class="border-black border-[2px] py-3 px-4">M</div>
            <div class="border-black border-[2px] py-3 px-4">L</div>
        </div>
        <div class="flex flex-row gap-4 items-end mt-[40px]">
            <div class="bg-[#007D6E] text-white hover:opacity-60  py-3 px-[100px] rounded-md font-[600] text-[20px]">Add to Cart </div>
            <div class="">
                <div class="">Quantity</div>
                <div class="flex flex-row gap-4 border-black border-[2px] py-3 px-3 pt-2">
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class=" flex flex-col pb-8 ">
    <div class=" flex flex-row items-center justify-center text-[40px] font-[700] pt-[80px]">Styling Ideas</div>
    <div class="flex flex-row justify-between px-[125px] items-end pt-[20px]">
        <div class="flex flex-col gap-3 pb-5">
            <div><img class="w-[384px]" src="/img/Frame 284-gc.png" alt=""></div>
            <div class=" text-[20px]">Rosie Sun Shoe</div>
            <div class=" text-[20px] font-[600]">N75,500</div>
            <div class=" text-[20px]  text-[#007D6E]">Sold by <span class="underline">Ola</span></div>
        </div>
        <div class="flex flex-col gap-3 pb-5">
            <div><img class="w-[384px] h-[304px]" src="/img/watch-gc.png" alt=""></div>
            <div class=" text-[20px]">John Torcasio Watch</div>
            <div class=" text-[20px] font-[600]">N175,500</div>
            <div class=" text-[20px]  text-[#007D6E]">Sold by <span class="underline">Ola</span></div>
        </div>
        <div class="flex flex-col gap-3 pb-5">
            <div><img class="w-[384px]" src="/img/Frame 286-gc.png" alt=""></div>
            <div class=" text-[20px]">Giorgio Trovato Sunglasses</div>
            <div class=" text-[20px] font-[600]">N48,000</div>
            <div class=" text-[20px]  text-[#007D6E]">Sold by <span class="underline">Maddisson</span></div>
        </div>
    </div>        
</div>


    </div>
  )
}

export default ProductPage