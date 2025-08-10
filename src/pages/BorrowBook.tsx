import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
    quantity: number,
    dueDate: string,
}

export default function BorrowBook() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm<Inputs>()
    
    //   const [createBook, { data, isLoading, error}] = useCreateBookMutation();
    //   console.log("outside handler: ", data);
      const onSubmit: SubmitHandler<Inputs> = async (value) => {
        console.log(value);
        //redux create book
        // const res = await createBook(value).unwrap();
        // console.log("inside handler: ", res);
        reset(); // form.reset();
      }


  return (
    <div className="max-w-[80%] mx-auto mb-20">
      <h3 className="text-4xl mb-4">Borrow Book</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 max-w-[50%] justify-center md:justify-start">


        <label>Quantity </label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Enter Quantity"
        {...register("quantity", { 
          required: true,
          valueAsNumber: true,
          min: 1,
          validate: {
            isInteger: (v) => 
             Number.isInteger(v) || "Copies Must Be an Integer"
            }
         })} />
        {errors.quantity?.type === 'required' && <span className="text-red-500">This field is required</span>}
        {errors.quantity?.type === "min" && (
        <p className="text-red-500" role="alert">Quantity Must Be at Least One.</p>
        )}
        {errors?.quantity && (
        <p className="text-red-500" role="alert">{errors?.quantity?.message}</p>
        )}

        

        <div className="flex justify-end items-center">
            <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block"><input type="submit" /></button>
        </div>

      </form>
      </div>
    </div>
  );
}