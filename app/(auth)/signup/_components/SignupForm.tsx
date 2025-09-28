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
import React from "react";
import { signupSubmit, useSignUp } from "../hooks/useSignUp";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import FormButton from "@/components/FormButton";

const SignupForm = () => {
  const form = useSignUp();
  const router = useRouter();
  return (
    <>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-4 font-sans"
          onSubmit={form.handleSubmit((values) => signupSubmit(values, router))}
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

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="9988555505" {...field} />
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

         <FormButton loading={form.formState.isSubmitting} title="SignUp"/>

          <Link href={"/login"} className="text-sm text-primary block">
            Already have an account?
          </Link>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
