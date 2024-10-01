// /controllers/blogController.js
const db = require("../models/db");

// 创建博客
exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  const sql = "INSERT INTO blogs (title, content) VALUES (?, ?)";
  db.query(sql, [title, content], (err, result) => {
    if (err) {
      console.error("Error creating blog:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(`Blog created: ${title} (ID: ${result.insertId})`); // 添加控制台信息
    res.json({
      message: "Blog created successfully !",
      blogId: result.insertId,
    });
  });
};

// 获取所有博客
exports.getAllBlogs = (req, res) => {
  const sql = "SELECT * FROM blogs";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching blogs:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(`Fetched ${results.length} blogs`); // 添加控制台信息
    res.json({ message: "Blogs fetched successfully", data: results });
  });
};

// 获取单个博客
exports.getBlogById = (req, res) => {
  const sql = "SELECT * FROM blogs WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error fetching blog:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length > 0) {
      console.log(`Fetched blog ID: ${req.params.id}`); // 添加控制台信息
      res.json({ message: "Blog fetched successfully", data: result[0] });
    } else {
      console.log(`Blog not found: ID ${req.params.id}`); // 添加控制台信息
      res.status(404).json({ message: "Blog not found" });
    }
  });
};

// 更新博客
exports.updateBlog = (req, res) => {
  const { title, content } = req.body;
  const sql =
    "UPDATE blogs SET title = ?, content = ?, updated_at = NOW() WHERE id = ?";
  db.query(sql, [title, content, req.params.id], (err, result) => {
    if (err) {
      console.error("Error updating blog:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows > 0) {
      console.log(`Blog updated: ID ${req.params.id}`); // 添加控制台信息
      res.json({ message: "Blog updated successfully" });
    } else {
      console.log(`Blog not found for update: ID ${req.params.id}`); // 添加控制台信息
      res.status(404).json({ message: "Blog not found" });
    }
  });
};

// 删除博客
exports.deleteBlog = (req, res) => {
  const sql = "DELETE FROM blogs WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error deleting blog:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows > 0) {
      console.log(`Blog deleted: ID ${req.params.id}`); // 添加控制台信息
      res.json({ message: "Blog deleted successfully" });
    } else {
      console.log(`Blog not found for deletion: ID ${req.params.id}`); // 添加控制台信息
      res.status(404).json({ message: "Blog not found" });
    }
  });
};
