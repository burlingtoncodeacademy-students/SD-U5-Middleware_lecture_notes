function logTime(req,res,next) {
    // console.log(req) // request object provided when we hit "send" within POSTMAN.

    let date = new Date();
    req.datePosted = date.toLocaleDateString(); 

    // console.log(req.datePosted);
    next();
}

module.exports = {
    logTime: logTime,
}

/* 
    - Creating a function called "logTime". 
        - has 3 parameters: request, response, next
        - runs logic within code block

    - module.exports
        - exporting an object.
        - we can make a variety of functions and store them within respective keys.
*/