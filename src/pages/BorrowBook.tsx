import { useForm, type SubmitHandler } from "react-hook-form"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  dayjs, { Dayjs } from "dayjs";
import * as React from 'react';
import { useNavigate, useParams } from "react-router";
import { useBorrowBookMutation } from "@/redux/features/books/booksApi";
import { toast, ToastContainer } from "react-toastify";


type Inputs = {
    quantity: number,
    dueDate: string,
}

interface IReqObject  {
    book: string,
    quantity: number,
    dueDate: string
 }

export default function BorrowBook() {
    const { id } = useParams();
 
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [serverError, setServerError] = useState(null);
    const [pastError, setPastError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const [borrowBook, { isLoading, data, isSuccess }] = useBorrowBookMutation();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (!value) {
                setPastError("This field is required");
                return;
            }
            if (value?.isBefore(dayjs(), "date")) {
                setPastError("Due Date cannot be in the past");
                return;
            }
            const isoString = value?.toISOString();
            //redux create book
            const reqObject : IReqObject = {
                book: id || "",
                quantity: data?.quantity || 0,
                dueDate: isoString || "",
            }
            const res = await borrowBook(reqObject);
            
            if (res?.error) {
                setServerError(res?.error?.data?.message);
                return;
            }
            // console.log("this is response of borrow book: ", res);
            reset(); 
            setValue(null);
            setServerError(null);
            setPastError(null);
        } catch (error) {
            // console.log("this is server error: ", error);
            toast.error("error");
            setServerError(error);
        }
    }
    const navigate = useNavigate()
    useEffect( () => {
        if (isSuccess) {
            toast.success("Book Borrow Successful");
            navigate('/borrow-summary');
        }
    },[isSuccess])

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
                    {errors?.quantity?.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.quantity?.type === "min" && (
                        <p className="text-red-500" role="alert">Quantity Must Be at Least One.</p>
                    )}
                    {errors?.quantity && (
                        <p className="text-red-500" role="alert">{errors?.quantity?.message}</p>
                    )}



                    <label>Due Date </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                disablePast
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    
                    <p className="text-red-500">{serverError ? serverError : ''}</p>
                    <p className="text-red-500">{pastError ? pastError : ''}</p>

                    <div className="flex justify-end items-center">
                        <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block"><input type="submit" /></button>
                    </div>
                </form>
            </div>
            {/* <ToastContainer/> */}
        </div>
    );
}