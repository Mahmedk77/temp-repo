const middleWare1 = (req, res, next)=> {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    // res.send('MIDDLE WARE')
    next()
}

const middleWare2 = (req, res, next) => {
    console.log('Authorize');
    next()
}

module.exports = {middleWare1, middleWare2}