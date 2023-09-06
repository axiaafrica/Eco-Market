import React from 'react'
import '../assets/style.css'
import ecoMarketLogo from '../assets/blessing_images/eco-market-logo.svg'
import Search from '../assets/blessing_images/search.svg'
import Chart from '../assets/blessing_images/chart.svg'
import Profile from '../assets/blessing_images/profile.svg'
import Image1 from '../assets/blessing_images/Image.png'
import Image2 from '../assets/blessing_images/Frame 262.png'
import Image3 from '../assets/blessing_images/Product Image.png'
import Image4 from '../assets/blessing_images/Product Image (1).png'
import Image5 from '../assets/blessing_images/Product Image (2).png'
import Image6 from '../assets/blessing_images/Product Image (3).png'
import Image7 from '../assets/blessing_images/Product Image (4).png'
import Image8 from '../assets/blessing_images/Frame 309.png'
import Image9 from '../assets/blessing_images/Frame 309 (1).png'
import Image10 from '../assets/blessing_images/Frame 309 (2).png'
import Image11 from '../assets/blessing_images/image 34.png'
import Image12 from '../assets/blessing_images/Frame 270.png'
import Image13 from '../assets/blessing_images/Frame 271.png'


// comment out every component you are not working on. Example, if you are working on navbar and header, comment out the rest and leave the components you are working on. this will prevent you from having to see the codes in them while you work and your task. exmple is how i comment out the Navbar

const Home = () => {
  return (
    <div>
     {/* <h2>this page is for <strong>Blessing.</strong> write all your html within this div. if you cant use tailwind, use the style.css file in the assets folder. the file is already linked</h2>
      <p>do not code the navbar and footer. </p> */}

    
    {/* <!-- NAVBAR --> */}
<nav class="font-nav xl:flex 2xl:justify-between xl:justify-center xl:gap-[120px] xl:px-[100px] xl:mt-[30px]">
   <div>
    <img src={ecoMarketLogo} alt=""/>
   </div>

   <div class="xl:flex xl:gap-[45px]">
   <ul class="xl:text-[18px] xl:font-[400] xl:flex xl:justify-between xl:gap-[50px] xl:mt-[6px]">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
   </ul>

   <div class="relative">
    <input type="text" placeholder="Search" class="xl:pl-10 xl:pr-4 xl:py-2 rounded-lg bg-white border border-gray-300"/>
    <img src={Search} alt="" class="absolute xl:left-3 xl:top-1/2 transform -translate-y-1/2 w-5 h-5"/>
  </div>

    <img src={Chart} alt=""/>
    <img src={Profile} alt=""/>
</div>

</nav>

{/* <!-- HEADER --> */}

<header class="xl:mt-[20px] relative">

    <div class="relative">
        <img src={Image1} alt="" class="w-[100%] object-cover"/>
        <div class="absolute inset-0 bg-header-bg opacity-[40%]"></div>
    </div>
   
    
    <div class="absolute xl:top-[150px] xl:ml-[90px] text-white xl:space-y-[50px]">
        <h1 class="xl:text-[48px] xl:font-[700] font-header-1 xl:w-[70%]">Exclusive Deals of Furniture Collection</h1>  
        <p class="font-header-2 xl:text-[18px] font-[400]">Explore different categories. Find the best deals.</p>
        <button class="font-header-3 bg-header xl:text-[18px] font-[700] py-[20px] px-[62px] rounded-[10px]">SHOP NOW</button>
    </div>
   

    <div class="xl:mt-[15px] text-white xl:text-end xl:pr-[120px]">
        <button class="font-header-3 bg-header xl:text-[18px] font-[700] py-[20px] px-[32px] rounded-[10px]">SET UP YOUR SHOP FOR FREE</button>
    </div>

</header>


{/* <!-- BODY --> */}

<section>

    <h2 class="font-header-1 xl:text-[58.38px] font-[600] text-center xl:mt-[10px]">Categories</h2>

    <div class="xl:text-center mt-[10px]">
    <button class="font-header-3 bg-white border solid border-header xl:text-[18px] font-[700] py-[20px] px-[62px] rounded-[10px]">SHOP NOW</button>
    </div>

</section>


<section class="font-header-3 xl:mt-[60px] xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-[30px] 2xl:gap-[50px]">

    <div>
        <img src={Image2} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Men</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>
    
    <div>
        <img src={Image3} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Women</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>
    
    
    <div>
        <img src={Image4} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Kids</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>
    
    
    <div>
        <img src={Image5} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Gadget</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>
    
    
    
    <div>
        <img src={Image6} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Fitness</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>
    
    
    
    <div>
        <img src={Image7} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Beauty</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
        </div>
    </div>


</section>


<section class="bg-background font-header-3 xl:flex xl:mt-[100px] xl:py-[40px] xl:justify-between">
    
    <div class="bg-white pt-[50px] pb-[20px] px-[30px]">
        <div>
            <img src={Image8} alt=""/>
            <div class="flex justify-between mt-[10px]">
                <p class="font-[700] text-[24px]">New arrivals in Toys</p>
                <p class="font-[400] text-header text-[16px] mt-[5px]">Shop now</p>
            </div>
        </div>
    </div>

    
    <div class="bg-white pt-[50px] pb-[20px] px-[30px]">
        <div>
            <img src={Image9} alt=""/>
            <div class="flex justify-between mt-[10px]">
                <p class="font-[700] text-[24px]">Discover fashion trends</p>
                <p class="font-[400] text-header text-[16px] mt-[5px]">See more</p>
            </div>
        </div>
    </div>


    <div class="bg-white pt-[50px] pb-[20px] px-[30px]">
        <div>
            <img src={Image10} alt=""/>
            <div class="flex justify-between mt-[10px]">
                <p class="font-[700] text-[24px]">Deals on gadgets</p>
                <p class="font-[400] text-header text-[16px] mt-[5px]">Shop now</p>
            </div>
        </div>
    </div>

</section>


<section class="xl:mt-[50px]">

    <h2 class="font-header-1 xl:text-[64px] font-[600] text-center xl:mt-[10px]">Our latest arrivals</h2>

    <div class="xl:text-center mt-[10px]">
    <button class="font-header-3 bg-white border solid border-header xl:text-[18px] font-[700] py-[20px] px-[62px] rounded-[10px]">SHOP NOW</button>

</div>
</section>

<section class="font-header-3 xl:mt-[60px] xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-[30px] 2xl:gap-[50px]">

    <div>
        <img src={Image11} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Sony Headphone</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">Shop now</p>
        </div>
    </div>


    <div>
        <img src={Image12} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Leggo Tracks</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">Shop now</p>
        </div>
    </div>


    <div>
        <img src={Image13} alt=""/>
        <div class="flex justify-between mt-[10px]">
            <p class="font-[700] text-[24px]">Huel protein shake</p>
            <p class="font-[400] text-header text-[16px] mt-[5px]">Shop now</p>
        </div>
    </div>
    
</section>

{/* <!-- FOOTER --> */}

<footer class="bg-header xl:mt-[90px] xl:px-[120px] 2xl:px-[220px] xl:py-[70px] font-header-3">

    <div>
        <img src={ecoMarketLogo} alt=""/>
    </div>

    <div class="xl:flex text-white xl:justify-between xl:mt-[50px]">

        <ul class="leading-[50px]">
            <li class="font-[700] text-[24px]">Discovery</li>
            <li class="text-[16px] font-[300]">New season</li>
            <li class="text-[16px] font-[300]">Most searched</li>
            <li class="text-[16px] font-[300]">Most selled</li>
        </ul>


        <ul class="leading-[50px]">
            <li class="font-[700] text-[24px]">About</li>
            <li class="text-[16px] font-[300]">Help</li>
            <li class="text-[16px] font-[300]">Shipping</li>
            <li class="text-[16px] font-[300]">Affiliate</li>
        </ul>
        

        <ul class="leading-[50px]">
            <li class="font-[700] text-[24px]">Info</li>
            <li class="text-[16px] font-[300]">Contact us</li>
            <li class="text-[16px] font-[300]">Privacy Policies</li>
            <li class="text-[16px] font-[300]">Terms & Conditions</li>
        </ul>

        <div class="xl:mt-[50px]">
            <div class="flex gap-[10px]">
                <input type="text" placeholder="Your Email" class="bg-header xl:w-[100%] xl:pl-3 xl:pr-4 xl:py-3 rounded-lg border border-white h-[30px]"/>
                <button class="text-black bg-white px-[25px] rounded-lg uppercase text-[10.64px] font-[700]">subscribe</button>
            </div>
    
            <p class="xl:text-[28.44px] font-[300] text-white xl:ml-[75px]">Sign Up To Our Newsletter.</p>
    
            <p class="text-[11.97px] font-[300] xl:ml-[75px]">Be the first to hear about the latest offers.</p>
    
        </div>

    </div>

    
    <hr class="w-[100%] h-[1px] mt-[20px] bg-white"></hr>



</footer>

    </div>
  )
}

export default Home;