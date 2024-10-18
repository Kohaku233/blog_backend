import { Blog } from "../models/Blog";

export const createBlog = async (title: string, content: string) => {
  return await Blog.create({ title, content } as Blog);
};

export const getAllBlogs = async () => {
  return await Blog.findAll();
};

export const getBlogById = async (id: number) => {
  return await Blog.findByPk(id);
};

export const updateBlog = async (id: number, title: string, content: string) => {
  const blog = await Blog.findByPk(id);
  if (blog) {
    return await blog.update({ title, content });
  }
  return null;
};

export const deleteBlog = async (id: number) => {
  const blog = await Blog.findByPk(id);
  if (blog) {
    await blog.destroy();
    return true;
  }
  return false;
};
