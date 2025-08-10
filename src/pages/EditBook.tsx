import Loading from "@/module/loading/Loading";
import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/features/books/booksApi";
import { useParams } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form"
import type { Inputs } from "@/module/books/CreateBookForm";
import { useEffect } from "react";


export default function EditBook() {

    const {id} = useParams();
    const { data : singleBookData, isLoading : singleBookIsLoading } = useGetBookByIdQuery(id);

    if (singleBookIsLoading) {
        <Loading />
    }


     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm<Inputs>()


      useEffect( () => {
        console.log("infinite reset");
        if (singleBookData?.data) {
            reset({
                title: singleBookData?.data?.title,
                author: singleBookData?.data?.author,
                genre: singleBookData?.data?.genre,
                isbn: singleBookData?.data?.isbn,
                description: singleBookData?.data?.description,
                copies: singleBookData?.data?.copies,
                available: singleBookData?.data?.available,
            })
        }
      } ,[singleBookData, reset])
    
      const [updateBook, { data : updatedBookData, isLoading: isUpdating}] = useUpdateBookMutation();
      console.log("outside edit handler: ", updatedBookData);
      const onSubmit: SubmitHandler<Inputs> = async (value) => {
        console.log(value);
        const draftValue = {
            id: id,
            ...value
        }
        const res = await updateBook(draftValue);
        console.log("inside edit handler: ", res);
        reset(); // form.reset();
      }

  return (
    <div>
      <h3>Welcome to editing page</h3>
       <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 max-w-[50%] justify-center md:justify-start">

        <label>Title</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Title"
        // defaultValue={singleBookData?.data?.title}
        {...register("title", { required: true })} />
        {errors.title && <span className="text-red-500">This field is required</span>}

        <label>Author</label>
        <input  
        className="border-2 p-2 rounded-sm"
        placeholder="Full Name"
        // defaultValue={singleBookData?.data?.author}
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
        // defaultValue={singleBookData?.data?.genre}
        {...register("genre", { required: "Genre Field Is Required" })}>
        {/* <option  value="">---Select a Genre---</option> */}
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
        // defaultValue={singleBookData?.data?.isbn}
        {...register("isbn", { required: true })} />
        {errors.isbn && <span className="text-red-500">ISBN field is required</span>}

        <label>Description</label>
        <textarea  
        className="border-2 p-2 rounded-sm"
        placeholder="Description Of the Book"
        // defaultValue={singleBookData?.data?.description || ""}
        {...register("description")} />

        <label>Copies</label>
        <input 
        className="border-2 p-2 rounded-sm"
        placeholder="Number of Books"
        // defaultValue={singleBookData?.data?.copies}
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
        // defaultValue={singleBookData?.data?.available}
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