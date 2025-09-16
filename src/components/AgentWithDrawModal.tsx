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
import { useWithdrawMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";


export function AgentWithdrawModal() {
  const [withdraw] = useWithdrawMutation()
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const payload = {
        phone: data.phone,
        amount: Number(data.amount),
      };
       await withdraw(payload).unwrap();
       toast.success("Money withdraw Successfully!")
     
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to withdraw money");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Withdraw Money</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw Money</DialogTitle>
          <DialogDescription>
            Enter account number and amount to Withdraw money.
          </DialogDescription>
        </DialogHeader>

        {/* Form starts here */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount" type="number" {...field} value={field.value || ""} />
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
              <Button type="submit">Withdraw</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
