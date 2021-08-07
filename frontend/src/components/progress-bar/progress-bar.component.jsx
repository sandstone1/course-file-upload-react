
/*
// 1 -

import React from 'react';
import './progress-bar.styles.scss';


const ProgressBar = ( { percentCompleted } ) => {

    /*
    // attempt 1
    // ==============================
    // component state
    // ==============================

    const [ style, setStyle ] = useState( { opacity : 0 } );

    // setTimeout
    setTimeout( () => {

        // create a new style object
        const newStyle = {

            opacity : 1

        };

        // set style
        setStyle( newStyle );

    }, 1000 );

    // attempt 2
    {

        percentCompleted === 0 ? (

            <div 
                className="progress-bar-container--div-1"
            >
                <span>Progress Bar</span>
            </div>

        ) : (

            <div 
                className="progress-bar-container--div-2"
                style={ { width : `${ percentCompleted }%` } }
            >
                { percentCompleted }%
            </div>
        )

    }
    */

    /*
    return (

        <div className="progress-bar-container">
    
            <div 
                className="progress-bar-container--div"
                style={ { width : `${ percentCompleted }%` } }
            >
                { percentCompleted }%
            </div>

        </div>

    );

}

export default ProgressBar;

// End of 1 -
*/

















// ===============================


















import React from 'react';
// import in the progress bar styles
import './progress-bar.styles.scss';


const ProgressBar = ( { percentCompleted } ) => {

    return (

        <div className="progress-bar-container">
    
            <div 
                className="progress-bar-container--div"
                style={ { width : `${ percentCompleted }%` } }
            >
                { percentCompleted }%
            </div>

        </div>

    );

}

export default ProgressBar;

