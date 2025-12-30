import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router";
import { toast } from "sonner";
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
import DemoCard from "../DemoCard";

export function Login({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await login(data).unwrap();
      toast.success("Login successful");
      navigate("/");
    } catch {
      toast.error("Invalid email or password");
    }
  };

  const handleAutoFill = (role: "ADMIN" | "USER") => {
    if (role === "ADMIN") {
      form.setValue("email", "admin@gmail.com");
      form.setValue("password", "Imran1#@");
    } else {
      form.setValue("email", "jibon@gmail.com");
      form.setValue("password", "Imran1#@");
    }
    toast.info(`${role} credentials filled`);
  };

  return (
    <div
      className={cn(
        "relative min-h-screen bg-background overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl dark:bg-indigo-600/20" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-600/20" />
      </div>

      <div className="container mx-auto min-h-screen flex items-center px-4">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          

          <div className="relative hidden lg:flex h-[520px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Fintech background"
              className="absolute inset-0 h-full w-full object-cover"
            />

  
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-black/70" />

    
            <div className="relative z-10 p-10 flex flex-col justify-end text-white">
              <h1 className="text-4xl font-extrabold leading-tight">
                Smart Digital <br /> Payments
              </h1>
              <p className="mt-3 text-sm text-white/80 max-w-sm">
                Secure, fast, and modern financial experience built for the
                future.
              </p>
            </div>
          </div>

  
          <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-xl p-8 space-y-6">
            <div className="flex flex-col items-center gap-2">
              <Logo />
              <h1 className="text-2xl font-extrabold">Welcome Back</h1>
              <p className="text-sm text-muted-foreground text-center">
                Login to your ZPay account
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                  Login
                </Button>
              </form>
            </Form>

            <div className="space-y-3">
              <DemoCard
                role="Admin"
                email="admin@gmail.com"
                password="Imran1#@"
                onClick={() => handleAutoFill("ADMIN")}
              />
              <DemoCard
                role="User"
                email="jibon@gmail.com"
                password="Imran1#@"
                onClick={() => handleAutoFill("USER")}
              />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


