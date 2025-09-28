"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const useLogin = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return form;
};

export const loginSubmit = async (
  values: z.infer<typeof loginSchema>,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      toast.error(res.error);
      return;
    }

    toast.success("Login successful!");
    router.push("/");
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong!");
  }
};
