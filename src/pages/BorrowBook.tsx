import { addDays } from "date-fns";
import { useForm, type SubmitHandler } from "react-hook-form"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from "dayjs";
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import { useParams } from "react-router";
import { useBorrowBookMutation } from "@/redux/features/books/booksApi";



type Inputs = {
    quantity: number,
    dueDate: string,
}

export default function BorrowBook() {
    const { id } = useParams();
    console.log('This is the id to Borrow: ', id);

    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [serverError, setServerError] = useState(null);
    console.log("this is server error : ", serverError);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const [borrowBook, { isLoading, data }] = useBorrowBookMutation();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const isoString = value?.toISOString();
            //redux create book
            const reqObject = {
                book: id,
                quantity: data?.quantity,
                dueDate: isoString
            }
            console.log("this is the request obj: ", reqObject);
            const res = await borrowBook(reqObject);
            if (res?.error) {
                setServerError(res?.error?.data?.message);
            }
            console.log("this is response of borrow book: ", res);
            reset(); // form.reset();
            setValue(null);
        } catch (error) {
            console.log("this is server error: ", error);
            setServerError(error);
        }
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

                    <div className="flex justify-end items-center">
                        <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block"><input type="submit" /></button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}