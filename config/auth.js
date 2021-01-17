module.exports= {
    ensureAuthenticated: (req, res, next) =>{
        if (req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please Login to access the dashboard');
        res.redirect('/users/login');
    }
}