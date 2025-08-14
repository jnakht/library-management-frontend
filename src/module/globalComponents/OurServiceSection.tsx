import SectionHeader from "../globalComponents/SectionHeader";
import { services } from "@/assets/services/services";
import ServiceCard from "./ServiceCard";

export default function OurServiceSection() {

  return (
    <div className="max-w-[80%] mx-auto  mb-20">
      <SectionHeader 
        title="Our Services"
        description="Discover how we make your reading experience easier, smarter, and more enjoyable — from personalized book recommendations to seamless library management tools."
      ></SectionHeader>
    {/* cards */}
      <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-7  max-w-[80%] mx-auto">
                {
                services?.map(service => 
                    <ServiceCard service={service}></ServiceCard>
                )
            }
            </div>
      </div>
      <div className="w-full  mx-auto flex flex-col justify-center items-center mt-10">
      </div>
    </div>
  );
}