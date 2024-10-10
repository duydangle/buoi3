exports.getHomePage = (req, res) => {
    res.render('main', { title: 'Home Page' });
};
