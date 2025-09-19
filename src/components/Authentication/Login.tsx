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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function Login({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await login(data).unwrap();
      toast.success("Login Successful");
      navigate("/");
    } catch (err) {
      toast.error("Invalid credentials");
      console.error(err);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col justify-center items-center p-4",
        className
      )}
      {...props}
    >
      {/* Login Card */}
      <div className="w-full max-w-md dark:bg-card p-8 space-y-6">
        {/* Logo & Title */}
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Login to your zPay account
          </p>
        </div>

        {/* Login Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} value={field.value || ""} />
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
                    <Input type="password" placeholder="********" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md">
              Login
            </Button>
          </form>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <span className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></span>
          <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">Or continue with</span>
          <span className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></span>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
