"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const signupSchema = z.object({
  username: z.string().min(5),
  email: z.email(),
  password: z.string().min(8),
  phone: z.string().length(10).regex(/^[0-9]+$/),
});

export const useSignUp = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: ""
    },
  });
  return form;
};

export const signupSubmit = async (
  values: z.infer<typeof signupSchema>,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Signup failed");
      return;
    }

    toast.success("Signup successful!");

    // Optional: redirect to login page
    router.push("/login");
  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
  }
};
