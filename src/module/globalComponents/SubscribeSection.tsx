import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

type Inputs = {
    email: string,
}

export default function SubscribeSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // console.log("Email: ", data);
        if (data?.email) {
          toast.success("Subscribed!");
        }
        reset();
    }
  return (
    <div className=" bg-brand-primary mt-25 mb-25 py-[100px]">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row gap-8 md:gap-0 items-center">
        <div className="w-full">
        <h3 className="text-white text-[36px] font-font-lora max-w-[555px]">Stay up to date with the latest from BookVentory</h3>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex justify-end items-center">
            <input { ...register("email")} className="w-full h-[50px] rounded-full bg-white p-4 pl-8 absolute inset-0 border-none outline-none" type="email" name="email" id="" placeholder="Email *" />
            <button className="btn text-[#FFF] text-[12px] md:text-[15px] font-nunito-sans bg-[#385777] hover:bg-[#385790] font-medium uppercase rounded-full border-2 border-white  px-3 md:px-6 py-3 duration-200 relative top-0 bottom-0 cursor-pointer">SUBSCRIBE</button>
        </form>
          <ToastContainer />
      </div>
      </div>
    </div>
  );
}