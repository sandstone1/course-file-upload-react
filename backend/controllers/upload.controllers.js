

// #10
// express-async-handler:
// " Home@Rogers-iMac react_file_upload % npm i express-async-handler " and this
// will install express-async-handler in our application
// section 1: React File Uploader with Express


// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the path module and this is a node.js module to work with file paths
import path from 'path';

// for es modules we have to resolve __dirname in order for it to work correctly
// and remember "No require, exports, module.exports, __filename, __dirname
// These CommonJS variables are not available in ES modules. " so for es modules we
// have to resolve __dirname in order for it to work correctly
const __dirname = path.resolve();


// in controller 1, we want to create a function to upload files

// ==============================
// Controller 1
// ==============================

// Controller 1
// @desc    - function to upload files
// @route   - POST request to /api/upload
// @access  - Public route
const uploadFile = asyncHandler( async( req, res ) => { // callback function to handle the request
// from the browser / frontend

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


export { 
    uploadFile
};
