var userService = require('./userServices.js');

var registerUserControllerFn = async (req, res) => {
    try {

        console.log(req.body);
        var status = await userService.registerUserDBService(req.body);
        console.log(status);

        if(status){
            res.send({"status": true, "message": "User registered succesfully"});
        } else {
            res.send({"status": false, "message": "Failed user registration"});
        }

    } catch (err) {
        console.log(err);
    }
}

var loginUserControllerFn = async (req, res) => {

    var result = null;

    try {

        result = await userService.loginUserDBService(req.body);

        if(result.status){
            res.send({"status": true, "message": result.msg});
            console.log("primer if");
        } else {
            res.send({"status": false, "message": result.msg});
            console.log("primer if - else");
        }

    } catch (error) {
        console.log(error);
        res.send({"status": false, "message": result.msg});
        console.log("catch");
    }
}


module.exports = {registerUserControllerFn, loginUserControllerFn};
