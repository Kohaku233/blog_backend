import express from 'express';
import * as blogController from '../controllers/blogController';

const router = express.Router();

router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

export default router;
