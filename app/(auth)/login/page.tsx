"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
  });
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = () => {
    toast.success("Form submitted");
  };
  return (
    <section className="h-screen w-full bg-zinc-200">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        {/* Form side */}
        <div className="flex-1 px-12 flex flex-col items-center justify-center w-full">
            {/* TITLE & DESC  */}
          <div className="w-full mb-8">
            <h1 className="heading">Login to <span className="text-primary">SehatConn</span></h1>
            <p className="desc">Login to SehatConn to access your account</p>
          </div>
          <Form {...form}>
            <form
              className="w-full flex flex-col gap-4 font-sans"
              onSubmit={form.handleSubmit(formSubmit)}
            >
              <div className="w-full cursor-pointer h-10 rounded shadow bg-zinc-50 flex items-center justify-center gap-1">
                <Image
                  src={"/png/google.png"}
                  alt="google"
                  width={20}
                  height={20}
                />
                <p className="font-sans">Google</p>
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@email.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full">Login</Button>

              <Link href={"/signup"} className="text-sm text-primary block">
                Don&apos;t have an account?
              </Link>
            </form>
          </Form>
        </div>
        {/* Right image/side */}
        <div className="hidden md:flex flex-2 bg-zinc-400 h-full">
          <Image
            src={"/auth/login/hero.jpg"}
            alt="login-img"
            width={1600}
            height={1600}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
