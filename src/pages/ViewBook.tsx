import Loading from "@/module/loading/Loading";
import { useGetBookByIdQuery } from "@/redux/features/books/booksApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";


type Inputs = {
  quantity: number,
}

export default function ViewBook() {

  

  const {id} = useParams();
  const { data , isLoading } = useGetBookByIdQuery(id, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    if (data.quantity > 0) {
      toast.success("Added To Cart");
    }
    reset();
  }

  if (isLoading) {
    <Loading></Loading>
  }
  return (
    <div className="w-[80%] mx-auto">
        {/* if contains image, then make a div here */}
        {/* contents */}
        <div>
          <h3 className="text-[40px] font-font-playfair-display text-[#121212] mb-2 md:mb-4">{data?.data?.title}</h3>
          <p className="text-[16px] text-brand-primary mb-4"><span className=" text-[#797979]">Author:</span> {data?.data?.author}</p>
          
            <p className={`data?.data?.available ? text-green-500 : text-brand-primary]`}>{data?.data?.available ? "available" : "unavailable"}</p>
          
          <p className="text-[#797979] text-[18px] mt-8 mb-6">{data?.data?.description}</p>

          <div className="flex mb-4">
            <h3 className="text-[#797979] w-[90px]">left:</h3>
            <p className="text-[17px] text-[#121212] font-semibold">{data?.data?.copies}</p>
          </div>

          <div className="flex mb-4">
            <h3 className="text-[#797979] w-[90px]">Genre:</h3>
            <p className="text-[17px] text-[#121212] font-semibold">{data?.data?.genre}</p>
          </div>

          <div className="flex mb-4">
            <h3 
              className="text-[#797979] w-[90px]">ISBN:</h3>
            <p className="text-[17px] text-[#121212] font-semibold">{data?.data?.isbn}</p>
          </div>

          <div className="flex flex-col  mt-8 mb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
              <input 
                {...register("quantity", {required: true, min: 1})} 
                className="py-4 w-[100px] pl-2 bg-white text-[17px] font-semibold text-[#121212] border outline-none" type="number"
                name="quantity" 
                min="0" 
                defaultValue={0}
                id="" 
              />
              
            <button 
              className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] w-[200px] py-4 duration-200">ADD TO CART
            </button>
           
            </form>
             {errors?.quantity?.type==='required' && <span className="text-red-500">This field is required</span>}
             {errors?.quantity?.type==='min' && <span className="text-red-500">Min Quantity Should Be 1</span>}
             {/* <ToastContainer/> */}
          </div>
        </div>
    </div>
  );
}