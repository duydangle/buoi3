const mysql = require('mysql2');

// Tạo kết nối với MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Thay bằng mật khẩu MySQL của bạn
    database: 'buoi3'
});

// Hiển thị danh sách người dùng
exports.listUsers = (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving users');
        }
        res.render('userList', { users: results });
    });
};


// Hiển thị thông tin chi tiết người dùng
// exports.viewUser = (req, res) => {
//     const username = req.params.username;
//     connection.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error retrieving user');
//         }
//         res.render('viewUser', { user: result[0] });
//     });
// };

// Hiển thị form sửa người dùng
// exports.editUserForm = (req, res) => {
//     const username = req.params.username;
//     connection.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error retrieving user');
//         }
//         res.render('editUser', { user: result[0] });
//     });
// };

// Cập nhật người dùng
// exports.updateUser = (req, res) => {
//     const username = req.params.username;
//     const { fullname, address, sex, email } = req.body;
//     connection.query('UPDATE users SET fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?', 
//     [fullname, address, sex, email, username], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error updating user');
//         }
//         res.redirect('/users');
//     });
// };

// Xóa người dùng
// exports.deleteUser = (req, res) => {
//     const username = req.params.username;
//     connection.query('DELETE FROM users WHERE username = ?', [username], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error deleting user');
//         }
//         res.redirect('/users');
//     });
// };

// Hiển thị form thêm người dùng mới
// exports.addUserForm = (req, res) => {
//     res.render('addUser');
// };

// Thêm người dùng mới
// exports.addUser = (req, res) => {
//     const { username, password, fullname, address, sex, email } = req.body;
//     connection.query('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)', 
//     [username, password, fullname, address, sex, email], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('Error adding user');
//         }
//         res.redirect('/users');
//     });
// };
