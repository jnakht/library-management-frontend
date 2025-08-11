export default function Slide3() {
  return (
    <div className="relative w-screen h-[80vh] flex justify-start items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.ibb.co/7JGy5mn3/bree-anne-b-SEHGGv-Cqo8-unsplash.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      {/* Content on top */}
      <div className="relative max-w-[90%] lg:max-w-[50%] text-left left-[10%] z-10">
          <p className="text-[#FFE8D3] font-lora text-2xl">Pick Your Book!</p>
         <h2 className="text-[#FFF] text-[44px] md:text-[63px] font-lora">The new novel from Blaine Pearson</h2>
         <button className="btn text-[#FFF] text-[15px] font-nunito-sans bg-[#385777] font-medium uppercase rounded-full h-[50px] md:h-[60px] w-[160px] md:w-[190px]">READ MORE</button>
       </div>
    </div>
  );
}
