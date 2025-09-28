"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLogin, loginSubmit } from "../hooks/useLogin";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import FormButton from "@/components/FormButton";

const LoginForm = () => {
  const form = useLogin();
  const router = useRouter();
  return (
    <>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-4 font-sans"
          onSubmit={form.handleSubmit((values) => loginSubmit(values, router))}
        >
          <div
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full cursor-pointer h-10 rounded shadow bg-zinc-50 flex items-center justify-center gap-1 hover:bg-zinc-100"
          >
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
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormButton loading={form.formState.isSubmitting} title="Login"/>

          <Link href={"/signup"} className="text-sm text-primary block">
            Don&apos;t have an account?
          </Link>
        </form>
      </Form>
    </>
  );
};


export default LoginForm;
