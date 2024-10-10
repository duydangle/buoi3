const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Route hiển thị danh sách người dùng
router.get('/users', UserController.listUsers);

// Route xem chi tiết người dùng
router.get('/users/view/:username', UserController.viewUser);

// Route sửa người dùng (GET để hiển thị form, POST để cập nhật)
router.get('/users/edit/:username', UserController.editUserForm);
router.post('/users/edit/:username', UserController.updateUser);

// Route xóa người dùng
router.post('/users/delete/:username', UserController.deleteUser);

// Route thêm người dùng (GET hiển thị form, POST để thêm)
router.get('/users/add', UserController.addUserForm);
router.post('/users/add', UserController.addUser);

module.exports = router;
