

/*
// 1 -

// remember there are 2 ways we can start using ES modules but the second way is the best and
// that way says we need to add " "type" : "module" " to our pacjkage.json file located in the
// root folder and let's do that now

// and remember the one difference between using ES modules on the frontend and ES modules on the
// backend is that we need to add the file extension to files but we don't need to do this for
// packages


// #4
// colors:
// " Home@Rogers-iMac react_file_upload % npm i colors " and this will install colors in our
// application
// section 1: React File Uploader with Express


// import in express
import express from 'express';
// import in express fileupload
import fileUpload from 'express-fileupload';
// import in colors
import colors from 'colors';


// 2 -
// import in dotenv
import dotenv from 'dotenv';

// configure dotenv
dotenv.config();

// End of 2 -


// 3 -

// remember "No require, exports, module.exports, __filename, __dirname
// These CommonJS variables are not available in ES modules. " so for es modules we
// have to resolve __dirname in order for it to work correctly ( and remember to import
// in path )
const __dirname = path.resolve();

// import in the path module and this is a node.js module to work with file paths
import path from 'path';

// End of 3 -


// initialize express
const app = express();

// initialize file upload
// remember " Each app.use( middleware ) is called every time a request is sent to the
// server. "
// remmber " To setup your middleware, you can invoke app.use(<specific_middleware_layer_here>)
// for every middleware layer that you want to add (it can be generic to all paths, or
// triggered only on specific path(s) your server handles), and it will add onto your Express
// middleware stack. "
app.use( fileUpload() );


// ==============================
// FILE UPLOAD ENPOINT
// ==============================

// we only need one endpoint for our file upload and we will send a request from react to the
// backend and in the request we will send along the file to upload
app.post(

    // endpoint
    '/upload',

    // callback function to handle the request from the browser / frontend
    ( req, res ) => {

        if ( req.files === null ) {

            // remember 400 is a bad request and we will send along some data using the json
            // data transfer format
            return res.status( 400 ).json( {  message : 'No file was uploaded.  Please try again.' } )

        } else {

            // set a file variable and we will define " req.files.file " in react
            const file = req.files.file;

            // create a path of where to save the file and then we will have a callback function
            // in case there is an error


            // 3 - continued

            // in order for this path to work we have to create an uploads folder
            file.mv( `${ __dirname }/frontend/public/uploads/${ file.name }`, ( error ) => {

            // End of 3 -

                // if the path does not exist
                if ( error ) {

                    // console log the error
                    console.log( error );

                    // 500 is a server error and we will send the error to the frontend
                    return res.status( 500 ).send( error );

                } else {

                    // if there is no error then send back a status code of 200 and " The HTTP
                    // 200 OK success status response code indicates that the request has
                    // succeeded. " 
                    res
                        .status( 200 )
                        .json( {
                            fileName : file.name,
                            filePath : `/uploads/${ file.name }`
                        } );

                }

            } )

        }

    }

);


// set the port number
// and remember port 5000 is already in use
const PORT = process.env.PORT || 5001;

// put app.listen() at the bottom of the file and let's use app.listen(); to show that our
// server is working and use the colors.js package at the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);

// and this should do it for our backend

// and to make sure this works let's run " Home@Rogers-iMac react_file_upload % npm run server "

// and this results in the following:

/*
> react_file_upload@1.0.0 server
> nodemon backend/server

[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node backend/server.js`
The server is running in undefined mode on port 5001
*/

// our process.env.PORT is not work and to fix this let's install dotenv


// #5
// dotenv:
// " Home@Rogers-iMac react_file_upload % npm i dotenv " and this will install dotenv in our
// application
// section 1: React File Uploader with Express


// " Usage
// As early as possible in your application, require and configure dotenv.

// require('dotenv').config()
// Create a .env file in the root directory of your project. Add environment-specific variables
// on new lines in the form of NAME=VALUE. For example:

/*
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

process.env now has the keys and values you defined in your .env file.

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}) "

*/


// got to 2 - above

// let's try this again " Home@Rogers-iMac react_file_upload % npm run server "

// and this results in the following:

/*
> react_file_upload@1.0.0 server
> nodemon backend/server

[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node backend/server.js`
The server is running in development mode on port 5001
*/

// and this is correct so everything is working as expected

// now we're going to move onto react

// End of 1 -

















// ===============================


















// remember there are 2 ways we can start using ES modules but the second way is the best and
// that way says we need to add " "type" : "module" " to our pacjkage.json file located in the
// root folder and let's do that now

// and remember the one difference between using ES modules on the frontend and ES modules on the
// backend is that we need to add the file extension to files but we don't need to do this for
// packages

// import in express
import express from 'express';
// import in express fileupload
import fileUpload from 'express-fileupload';
// import in colors
import colors from 'colors';
// import in dotenv
import dotenv from 'dotenv';
// import in the path module and this is a node.js module to work with file paths
import path from 'path';

// configure dotenv
dotenv.config();

// initialize express
const app = express();


// initialize file upload
// remember " Each app.use( middleware ) is called every time a request is sent to the
// server. "
// remember " To setup your middleware, you can invoke app.use(<specific_middleware_layer_here>)
// for every middleware layer that you want to add (it can be generic to all paths, or
// triggered only on specific path(s) your server handles), and it will add onto your Express
// middleware stack. "
app.use( fileUpload() );


// ==============================
// MAKE THE REACT_FILE_UPLOAD/UPLOADS FOLDER A STATIC FOLDER
// ==============================

// make the uploads folder a static folder

// for es modules we have to resolve __dirname in order for it to work correctly
// and remember "No require, exports, module.exports, __filename, __dirname
// These CommonJS variables are not available in ES modules. " so for es modules we
// have to resolve __dirname in order for it to work correctly
const __dirname = path.resolve();

// remember " path.join( __dirname, '/uploads' ); " gives us
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/react_file_upload/uploads "

// remember " The app.use(); function is used to mount the specified middleware function(s) at the
// path which is being specified. Syntax: app.use( path, callback ); "

// in summary, path.join(); is taking us to the react_file_upload/uploads folder and we're making
// that folder static so that it can get loaded in the browser

// and the reason we are saving the images to the react_file_upload/uploads folder and not the
// react_file_upload/frontend/public/uploads folder is so we can view the images in production

// and remember we didn't need the code below when we were saving the images in the
// react_file_upload/frontend/public/uploads folder since the public folder is a static folder
// by default

// remember we have to specify a mount path or " /uploads " for the code below to work
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) );


// ==============================
// FILE UPLOAD ENPOINT
// ==============================

// we only need one endpoint for our file upload and we will send a request from react to the
// backend and in the request we will send along the file to upload
app.post(

    // endpoint
    '/upload',

    // callback function to handle the request from the browser / frontend
    ( req, res ) => {

        if ( req.files === null ) {

            // remember 400 is a bad request and we will send along some data using the json
            // data transfer format
            return res.status( 400 ).json( {  message : 'No file was uploaded.  Please try again.' } )

        } else {

            // set a file variable and we will define " req.files.file " in react
            const file = req.files.file;

            // create a path of where to save the file and then we will have a callback function
            // in case there is an error

            // in order for this path to work we have to create an uploads folder

            // and since we are no longer saving the images in the
            // react_file_upload/frontend/public/uploads folder we have to change the code below
            // from
            // " file.mv( `${ __dirname }/frontend/public/uploads/${ file.name }`, ( error ) => { "
            // to
            // " file.mv( `${ __dirname }/uploads/${ file.name }`, ( error ) => { "
            file.mv( `${ __dirname }/uploads/${ file.name }`, ( error ) => {

                // if the path does not exist
                if ( error ) {

                    // 500 is a server error and we will send the error to the frontend
                    return res.status( 500 ).send( error );

                } else {

                    // if there is no error then send back a status code of 200 and " The HTTP
                    // 200 OK success status response code indicates that the request has
                    // succeeded. " 
                    res
                        .status( 200 )
                        .json( {
                            fileName : file.name,
                            filePath : `/uploads/${ file.name }`
                        } );

                }

            } )

        }

    }

);


// ==============================
// PREPARE APP FOR DEVELOPMENT
// ==============================

// the following code will prepare our application for deployment

// if were in production then the goal is to (1) make the build folder static and (2) send to the
// server the index.html file
if ( process.env.NODE_ENV === 'production' ) {

    // if were in production then we want to set our frontend/build folder as a static
    // folder
    app.use( express.static( path.join( __dirname, '/frontend/build' ) ) );

    // get any route that is not one of our api routes above
    app.get( '*', ( req, res ) => (

        // remember " path.resolve( __dirname, 'frontend', 'build', 'index.html' ) " gives us
        // " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/react_file_upload/frontend/build/index.html "
        res.sendFile( path.resolve( __dirname, 'frontend', 'build', 'index.html' ) )

     ) );

} else {

    // cut and then paste Route 1 inside the else statement

    // ROUTE 1
    // now let's create a route
    app.get( '/', ( req, res ) => {

        // and after we get a request from the browser let's send a response
        res.send( 'API is running' ); 

    } );

}


// set the port number
// and remember port 5000 is already in use
const PORT = process.env.PORT || 5001;

// put app.listen() at the bottom of the file and let's use app.listen(); to show that our
// server is working and use the colors.js package at the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);

// and this should do it for our backend

// and to make sure this works let's run " Home@Rogers-iMac react_file_upload % npm run server "

// and this results in the following:

/*
> react_file_upload@1.0.0 server
> nodemon backend/server

[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node backend/server.js`
The server is running in undefined mode on port 5001
*/

// our process.env.PORT is not working and to fix this let's install dotenv


// #5
// dotenv:
// " Home@Rogers-iMac react_file_upload % npm i dotenv " and this will install dotenv in our
// application
// section 1: React File Uploader with Express


// " Usage
// As early as possible in your application, require and configure dotenv.

// require('dotenv').config()
// Create a .env file in the root directory of your project. Add environment-specific variables
// on new lines in the form of NAME=VALUE. For example:

/*
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

process.env now has the keys and values you defined in your .env file.

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}) "
*/


// let's try this again " Home@Rogers-iMac react_file_upload % npm run server "

// and this results in the following:

/*
> react_file_upload@1.0.0 server
> nodemon backend/server

[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node backend/server.js`
The server is running in development mode on port 5001
*/

// and this is correct so everything is working as expected


