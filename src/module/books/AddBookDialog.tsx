import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddBookDialog() {

    const form = useForm();

    const onSubmit : SubmitHandler<FieldValues> = async(value) => {
        console.log(value);
    }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
         

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                        <FormLabel />
                        <FormControl>
                             <Input {...field} onChange={field.onChange}></Input>
                        </FormControl>
                        </FormItem>
                    )}
                />
                {/* author */}
                <FormField
                    control={form.control}
                    name="author"
                    render={({field}) => (
                        <FormItem>
                        <FormLabel />
                        <FormControl>
                             <Input {...field} onChange={field.onChange}></Input>
                        </FormControl>
                        </FormItem>
                    )}
                />
                {/* genre */}
                <Select>
                    <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Genre</SelectLabel>
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                 {/* isbn */}
                <FormField
                    control={form.control}
                    name="isbn"
                    render={({field}) => (
                        <FormItem>
                        <FormLabel />
                        <FormControl>
                             <Input {...field} onChange={field.onChange}></Input>
                        </FormControl>
                        </FormItem>
                    )}
                />
                 {/* description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                        <FormLabel />
                        <FormControl>
                             <Input {...field} onChange={field.onChange}></Input>
                        </FormControl>
                        </FormItem>
                    )}
                />
                 {/* copies */}
                <FormField
                    control={form.control}
                    name="copies"
                    render={({field}) => (
                        <FormItem>
                        <FormLabel />
                        <FormControl>
                             <Input {...field} onChange={field.onChange}></Input>
                        </FormControl>
                        </FormItem>
                    )}
                />
                 {/* available */}
                <Select>
                    <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Availability</SelectLabel>
                    <SelectItem value="true">true</SelectItem>
                    <SelectItem value="false">false</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </form>
         </Form>
         

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
