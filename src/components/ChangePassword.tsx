/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export function ChangePassword() {
    const [passwordChange] = useChangePasswordMutation()
 
  
  const form = useForm();

 const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  const payload = {
    oldPassword: data.oldPassword,
    newPassword: data.newPassword,
  };

  try {
    await passwordChange(payload).unwrap();
    toast.success("Password Change successfully.")
  } catch (error) {
    toast.error("Password change failed");
  }
};


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Enter old password and new Password.
          </DialogDescription>
        </DialogHeader>

        {/* Form starts here */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>old Password</FormLabel>
                  <FormControl>
                    <Input placeholder="old password" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>new Password</FormLabel>
                  <FormControl>
                    <Input placeholder="new Password"  {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button inside form */}
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
