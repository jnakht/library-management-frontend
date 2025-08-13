


export default function Slide1() {
  return (
    

    <div className="w-screen h-[80vh] relative flex justify-start items-center">
        {/* bg image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co.com/NnyHNcKL/pexels-tima-miroshnichenko-6550399-1.jpg')"}}/>
        
        {/* linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"/>

       {/* top content */}
       <div className="relative max-w-[90%] lg:max-w-[50%] text-left left-[10%] z-10">
          <p className="text-[#FFE8D3] font-lora text-2xl">Pick Your Book!</p>
         <h2 className="text-[#FFF] text-[44px] md:text-[63px] font-lora cursor-pointer">Smart tools for effortless library management</h2>
         <button className="btn text-[#FFF] text-[15px] font-nunito-sans bg-[#385777] hover:bg-[#385790] font-medium uppercase rounded-full h-[50px] md:h-[60px] w-[160px] md:w-[190px]">READ MORE</button>
       </div>
       
    </div>
  );
}