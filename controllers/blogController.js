// /controllers/blogController.js
const db = require('../models/db');

// 创建博客
exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO blog_db (title, content) VALUES (?, ?)';
  db.query(sql, [title, content], (err, result) => {
    if (err) {
      console.error('Error creating blog:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Blog created', blogId: result.insertId });
  });
};

// 获取所有博客
exports.getAllBlogs = (req, res) => {
  const sql = 'SELECT * FROM blog_db';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching blogs:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
};

// 获取单个博客
exports.getBlogById = (req, res) => {
  const sql = 'SELECT * FROM blog_db WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error fetching blog:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  });
};

// 更新博客
exports.updateBlog = (req, res) => {
  const { title, content } = req.body;
  const sql = 'UPDATE blog_db SET title = ?, content = ?, updated_at = NOW() WHERE id = ?';
  db.query(sql, [title, content, req.params.id], (err, result) => {
    if (err) {
      console.error('Error updating blog:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (result.affectedRows > 0) {
      res.json({ message: 'Blog updated' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  });
};

// 删除博客
exports.deleteBlog = (req, res) => {
  const sql = 'DELETE FROM blog_db WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error deleting blog:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (result.affectedRows > 0) {
      res.json({ message: 'Blog deleted' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  });
};
