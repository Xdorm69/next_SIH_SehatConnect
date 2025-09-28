import BlogForm from "../_components/BlogForm";
import { prisma } from "@/lib/db";

const EditBlogPage = async ({ params }: { params: { id: string } }) => {
  // Server-side code only
  const blog = await prisma.blogs.findUnique({ where: { id: params.id } });
  if (!blog) return <p>Blog not found</p>;

  // Prepare plain object for client component
  const blogData = {
    title: blog.title,
    description: blog.description || "",
    img: blog.img,
    popular: blog.popular,
  };

  return (
    <div>
      <h1 className="heading">Edit Blog</h1>
      <BlogForm data={blogData} mode="update" id={params.id} />
    </div>
  );
};

export default EditBlogPage;
