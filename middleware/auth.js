const isAdmin = (req,res,next) => {
    if (req.user.is_Admin) next();
    res.json({
        error: "Esta operacion la puede realizar solo un administrador",
    })
}

module.exports = { isAdmin }