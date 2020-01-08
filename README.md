# express-node-max
  
  * NPM Packages(different env)
    * npm i nodemon --save-dev 
    * npm i nodemon --save => prod by default
    * npm i -g nodemon  => globally

  * Types Of errors
    * Syntax Error  
    * Runtime Errors
    * Logical Errors => no error message

    * Tools Used
      * 51 Node.js max
      * https://code.visualstudio.com/docs/nodejs/nodejs-debugging

  * Middleware
    * core concept of express    
    * every request passes through multiple middlewares
    * next(); // Allows the request to continue to the next middleware in line
      until res.send() is encountered it won't return to browser
    * can use app.use('/', (req,res,next) => {}) to server request or there is app.get(), app.post(), app.delete(), 
      app.patch(), app.put()  
    * when using app.use() the order of the routes matter, hence not use where as usign app.get() ... will do check
      internally
    * use app.use as failsafe for any other route not found    