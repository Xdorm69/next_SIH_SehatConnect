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

const SignupPage = () => {
  const signupSchema = z.object({
    username: z.string().min(5),
    email: z.email(),
    password: z.string().min(8),
  });
  
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
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
        <div className="w-full px-12 md:flex-1 flex flex-col justify-center items-center">
          {/* TITLE & DESC  */}
          <div className="w-full mb-8">
            <h1 className="heading">
              Signup to <span className="text-primary">SehatConn</span>
            </h1>
            <p className="desc">Signup to SehatConn to create your account</p>
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

              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="john123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <Button className="w-full">Signup</Button>

              <Link href={"/login"} className="text-sm text-primary block">
                Already have an account?
              </Link>
            </form>
          </Form>
        </div>

        {/* Right image/side */}
        <div className="hidden md:flex flex-2 bg-zinc-400 h-full">
          <Image
            src={"/auth/signup/hero.jpg"}
            alt="signup-img"
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

export default SignupPage;
