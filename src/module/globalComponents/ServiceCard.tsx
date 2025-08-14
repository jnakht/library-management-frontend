import type { IService } from "@/types";


export default function ServiceCard({service} : { service: IService }) {
  return (
    <div className='space-y-5 w-full md:w-[80%] h-[300px] xl:h-[190px] bg-[#5B9894] p-4 rounded-md'>
      <div className='flex-1'>
        <h3 className='text-2xl font-font-lora'>{service?.title}</h3>
      </div>
      <div className=' flex-1'>
        <p className='text-[16px] '>{service?.description}</p>
      </div>
      <button className='text-[16px] hover:text-brand-primary underline cursor-pointer font-semibold'>LEARN MORE</button>
    </div>
  );
}