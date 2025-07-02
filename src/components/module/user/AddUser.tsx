import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { addUser } from "@/redux/feature/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { iUser } from "@/types";
import { useState } from "react";



import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";



export function AddUser() {

  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();
  const form = useForm(
    {defaultValues: {
     name: ""
    },}
  );
 
  

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

   
      dispatch(addUser(data as iUser));
      setOpen(false)

      form.reset()
    

  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Fill up the form</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

           
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="mt-5">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="mt-5">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
