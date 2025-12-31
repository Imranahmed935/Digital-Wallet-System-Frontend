import Logo from "@/assets/icon/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "../ui/Password";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";

const registerSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^01[0-9]{9}$/, {
    message: "Phone must be a valid Bangladeshi number (11 digits starting with 01)",
  }),
  role: z.enum(["user", "agent"]),
  password: z.string().min(8),
});

export function Register({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", phone: "", role: "user", password: "" },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      await register(data).unwrap();
      toast.success("User created successfully!");
      navigate("/login");
    } catch (err) {
      toast.error("Registration failed!");
      console.error(err);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col justify-center items-center p-6",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <Logo />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create your zPay Account
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
          Fast, secure, and modern fintech experience. Sign up to manage your money effortlessly.
        </p>
      </div>


      <div className="w-full max-w-md bg-white dark:bg-card p-8 rounded-2xl shadow-2xl space-y-6 border border-indigo-100 dark:border-gray-700">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
   
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

       
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="01XXXXXXXXX"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}  
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="agent">Agent</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

      
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Password {...field} className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              Register
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
