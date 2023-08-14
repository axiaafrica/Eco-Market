import React from 'react'
import '../assets/style.css'


const MenFashion = () => {
  return (
    <div class="bg-[#EFF2F6]" >
      <div>
        <img class="xl:w-full" src="/img/Frame 252-gc.png" alt="fashion pic"/>
    </div>
    <div class="pt-[50px] flex flex-row items-center justify-end px-[125px]">
        <div class="flex flex-row gap-4 bg-white items-center py-2 px-3 rounded-md ">
            <div class="text-black xl:font-[700] xl:text-[20px]">Sort by: Most popular</div>
            <div><img src="/img/Chevron Down-gc.png" alt=""/></div> 
        </div>
    </div>
    <div class="flex flex-row justify-between gap-9 px-[125px] pt-[80px]">
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 253-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">Shirts</div>
                <div class=" font-[600] text-[16px] hover:opacity-60  text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 254-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">T-Shirts</div>
                <div class=" font-[600] text-[16px] hover:opacity-60  text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 311-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">Shoes</div>
                <div class=" font-[600] text-[16px] hover:opacity-60  text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
    </div>

    <div class="flex flex-row justify-between gap-9 px-[125px] pt-[80px]">
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 256-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">Trousers</div>
                <div class=" font-[600] text-[16px] hover:opacity-60  text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 257-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">Sun Glasses</div>
                <div class=" font-[600] text-[16px] hover:opacity-60  text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
        <div class="flex flex-col w-[384px]">
            <div><img src="/img/Frame 258-gc.png" alt=""/></div>
            <div class="pt-2 flex flex-row items-center justify-between">
                <div class="font-[600] text-[20px]">Watches</div>
                <div class=" font-[600] text-[16px] hover:opacity-60 text-[#007D6E]"><a href="">Shop here</a></div>
            </div>
        </div>
    </div>

    <div class="flex flex-row justify-between px-[125px] mt-[80px]  bg-[#E1E1E1]">
        <div class="left-side flex flex-col items-start pt-[80px]">
            <div class="text-[32px] font-[400] pl-[30px] "><span class="italic">Our hottest shoes of the </span> <br/
            ><span  class="text-[40px] font-[700]">Summer is Here</span></div>
            <div class="text-[20px] font-[500] mt-[30px] hover:opacity-60 bg-[#007D6E] text-white py-3 px-14 rounded-md"><a href="">Shop Now</a></div>
        </div>
        <div class="right-side">
            <div class="flex flex-row gap-4">
                <div><img src="/img/Rectangle 180-gc.png" alt="shoe"/></div>
                <div><img src="/img/Rectangle 178-gc.png" alt="shoe"/></div>
                <div><img src="img/Rectangle 174-gc.png" alt=""/></div>
                <div><img src="img/Rectangle 176-gc.png" alt=""/></div>
            </div>
            <div class="flex flex-row gap-4">
                <div><img src="/img/Rectangle 181-gc.png" alt="shoe"/></div>
                <div><img src="/img/Rectangle 179-gc.png" alt="shoe"/></div>
                <div><img src="img/Rectangle 175-gc.png" alt=""/></div>
                <div><img src="img/Rectangle 177-gc.png" alt=""/></div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default MenFashion