import { useCreateBookMutation } from "@/redux/features/books/booksApi";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export type Inputs = {
    title: string;
    author: string;
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE'  | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}



export default function CreateBookForm() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const [createBook, { data, isLoading, isError , error, isSuccess }] = useCreateBookMutation();
  console.log("outside handler: ", data);
  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    //redux create book
    try {
      const res = await createBook(value).unwrap();
      console.log("this is response on create Book : ", res);
      reset();
    } catch (error : any) {
      // console.log("This is error on creating book: ", error);
      const field = error?.data?.error?.errors ? Object.keys(error?.data?.error?.errors)[0] : null;
      const errorMsg = error?.data?.error?.errors?.[field]?.message ||  "Error Occurred!";
      toast.error(errorMsg);
    }
  }

  const navigate = useNavigate();
  useEffect( () => {
    if (isSuccess) {
      toast.success("Book Created Successfully");
      navigate('/books');
    }
  },[isSuccess])

  return (
    <div className="max-w-[80%] mx-auto mb-20">
      <h3 className="text-4xl mb-4 w-full md:w-[50%] mx-auto">Book Information</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full md:w-[50%] mx-auto justify-center md:justify-start">

        <label>Title</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Title"
        {...register("title", { required: true })} />
        {errors?.title && <span className="text-red-500">This field is required</span>}

        <label>Author</label>
        <input  
        className="border-2 p-2 rounded-sm"
        placeholder="Full Name"
        {...register("author", { 
          required: "Author Name Is Required",
          pattern: {
            value: /^(?=.*[A-Za-z])[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
            message: "Author Name Can Only Contain Letters and Spaces, Accented Letters, Apostrophes ', Hyphens -; Name Must Contain At Least One Letter"
          } 
        })} />
        {errors?.author && <span className="text-red-500">{errors.author?.message}</span>}

        <label>Genre</label>
        <select 
        className="border-2 p-2 rounded-sm"
        defaultValue=""
        {...register("genre", { required: "Genre Field Is Required" })}>
        <option  value="">---Select a Genre---</option>
        <option value="FICTION">FICTION</option>
        <option value="NON_FICTION">NON_FICTION</option>
        <option value="SCIENCE">SCIENCE</option>
        <option value="HISTORY">HISTORY</option>
        <option value="BIOGRAPHY">BIOGRAPHY</option>
        <option value="FANTASY">FANTASY</option>
        </select>
        {errors?.genre && <span className="text-red-500">{errors.genre?.message}</span>}

        <label>isbn</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="ISBN number"
        {...register("isbn", { required: true })} />
        {errors?.isbn && <span className="text-red-500">ISBN field is required</span>}

        <label>Description</label>
        <textarea  
        className="border-2 p-2 rounded-sm"
        placeholder="Description Of the Book"
        {...register("description")} />

        <label>Copies</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Number of Books"
        {...register("copies", { 
          required: true,
          valueAsNumber: true,
          min: 0,
          validate: {
            isInteger: (v) => 
             Number.isInteger(v) || "Copies Must Be an Integer"
            }
         })} />
        {errors?.copies?.type === 'required' && <span className="text-red-500">This field is required</span>}
        {errors?.copies?.type === "min" && (
        <p className="text-red-500" role="alert">Copies Must Be a Positive Integer</p>
        )}
        {errors?.copies && (
        <p className="text-red-500" role="alert">{errors?.copies?.message}</p>
        )}

        <label>Availability</label>
        <select 
        defaultValue="true"
        className="border-2 p-2 rounded-sm"
        {...register("available")}>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
        </select>

        <div className="flex justify-end items-center">
            <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200"><input type="submit" /></button>
        </div>

      </form>
      </div>
    </div>
  );
}