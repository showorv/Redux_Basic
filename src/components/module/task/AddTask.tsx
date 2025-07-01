import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { addTask } from "@/redux/feature/task/taskSlice"
import { useAppDispatch } from "@/redux/hook"
import type { iTask } from "@/types"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"


import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form"

export function AddTask() {
  const form = useForm()
  const dispatch = useAppDispatch()

  const onSubmit:SubmitHandler<FieldValues> = (data)=>{
    console.log(data);
    
    dispatch(addTask(data as iTask))
  }
  return (
    <Dialog>
     
        <DialogTrigger asChild>
          <Button className="bg-green-500">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>Fill up the form</DialogDescription>
          </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

        
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input  {...field} value={field.value || ""}/>
                </FormControl>
                
              </FormItem>
            )}
            
          />
        
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-2">Description</FormLabel>
                <FormControl>
                  <Textarea  {...field} value={field.value || ""}/>
                </FormControl>
                
              </FormItem>
            )}
            
          />

<FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-2">Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="mt-2">Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            
            </FormItem>
          )}
        />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="mt-5">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="mt-5">Save changes</Button>
          </DialogFooter>
          </form>
          </Form>
        </DialogContent>
    
    </Dialog>
  )
}
