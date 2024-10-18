import { Request, Response } from 'express';
import * as blogService from '../services/blogService';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const blog = await blogService.createBlog(title, content);
    console.log(`Blog created: ${title} (ID: ${blog.id})`);
    res.json({
      message: "Blog created successfully!",
      blogId: blog.id,
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await blogService.getAllBlogs();
    console.log(`Fetched ${blogs.length} blogs`);
    res.json({ message: "Blogs fetched successfully", data: blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await blogService.getBlogById(Number(req.params.id));
    if (blog) {
      console.log(`Fetched blog ID: ${req.params.id}`);
      res.json({ message: "Blog fetched successfully", data: blog });
    } else {
      console.log(`Blog not found: ID ${req.params.id}`);
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const updatedBlog = await blogService.updateBlog(Number(req.params.id), title, content);
    if (updatedBlog) {
      console.log(`Blog updated: ID ${req.params.id}`);
      res.json({ message: "Blog updated successfully" });
    } else {
      console.log(`Blog not found for update: ID ${req.params.id}`);
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deleted = await blogService.deleteBlog(Number(req.params.id));
    if (deleted) {
      console.log(`Blog deleted: ID ${req.params.id}`);
      res.json({ message: "Blog deleted successfully" });
    } else {
      console.log(`Blog not found for deletion: ID ${req.params.id}`);
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
