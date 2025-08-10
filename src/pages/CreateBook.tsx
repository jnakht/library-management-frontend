import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
    title: string;
    author: string;
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE'  | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}



export default function CreateBook() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
//    console.log(watch("example")) // watch input value by passing the name of it

  

  return (
    <div className="max-w-[80%] mx-auto mb-20">
      <h3 className="text-4xl mb-4">Book Information</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 max-w-[50%] justify-center md:justify-start">

        <label>Title</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Title"
        {...register("title", { required: true })} />
        {errors.title && <span className="text-red-500">This field is required</span>}

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
        {errors.author && <span className="text-red-500">{errors.author?.message}</span>}

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
        {errors.genre && <span className="text-red-500">{errors.genre.message}</span>}

        <label>isbn</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="ISBN number"
        {...register("isbn", { required: true })} />
        {errors.isbn && <span className="text-red-500">ISBN field is required</span>}

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
        {errors.copies?.type === 'required' && <span className="text-red-500">This field is required</span>}
        {errors.copies?.type === "min" && (
        <p className="text-red-500" role="alert">Copies Must Be a Positive Integer</p>
        )}
        {errors?.copies && (
        <p className="text-red-500" role="alert">{errors?.copies?.message}</p>
        )}

        <label>Availability</label>
        <select 
        defaultValue="true"
        className="border-2 p-2 rounded-sm"
        {...register("available", { required: "Please Select Availability" })}>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
        </select>

        <div className="flex justify-end items-center">
            <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block"><input type="submit" /></button>
        </div>

      </form>
      </div>
    </div>
  );
}