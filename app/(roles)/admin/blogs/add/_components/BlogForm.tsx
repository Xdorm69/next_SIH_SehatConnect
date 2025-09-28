"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { addBlog } from "../_hooks/addBlog";
import FormButton from "@/components/FormButton";
import { updateBlog } from "../../_hooks/updateBlog";
import { Switch } from "@/components/ui/switch"; // <-- Import Shadcn Switch

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  img: z.string(),
  popular: z.boolean(),
});

const emptyData: z.infer<typeof blogSchema> = {
  title: "",
  description: "",
  img: "",
  popular: false,
};

const BlogForm = ({
  data = emptyData,
  mode = "add",
  id = "",
}: {
  data?: z.infer<typeof blogSchema>;
  mode?: "add" | "update";
  id?: string;
}) => {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: data?.title,
      description: data?.description,
      img: data?.img,
      popular: data?.popular,
    },
  });

  const handleAddBlog = async (values: z.infer<typeof blogSchema>) => {
    try {
      await addBlog(values);
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Blog Added");
    } catch (error) {
      toast.error("Failed to add blog");
    }
    form.reset();
  };

  const handleUpdateBlog = async (values: z.infer<typeof blogSchema>) => {
    try {
      await updateBlog(id, values);
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Blog Updated");
    } catch (error) {
      toast.error("Failed to update blog");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          mode === "add" ? handleAddBlog : handleUpdateBlog
        )}
        className="flex flex-col gap-4 max-w-md shadow p-6 bg-card mt-6 rounded"
      >
        {/* TITLE  */}
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* DESCRIPTION  */}
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="Enter Description"
                  className="w-full p-2 rounded border shadow border-gray-300 bg-card resize-none"
                  rows={4} // adjust height
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* IMAGE */}
        <FormField
          name="img"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Image URL" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* POPULAR SWITCH */}
        <FormField
          name="popular"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <FormLabel>Popular</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormButton
          loading={form.formState.isSubmitting}
          title={mode === "add" ? "Add Blog" : "Update Blog"}
        />
      </form>
    </Form>
  );
};

export default BlogForm;
