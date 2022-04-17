// imr + tab import React
// import React from 'react';
// you'll need to import React to use Hooks and other exports that React provides.

// Fragment 
import { Fragment } from 'react';
import PropTypes from 'prop-types'
// higher order component

// Functional components
const FirstApp = ({ 
    greeting, 
    subtitle 
}) => {
    // const greeting = {
    //     name: 'Juan',
    //     age: 45
    // }; doesnt work with boolean
    return (      
        <>
            <h1>{ greeting }</h1>
            <h2>{ subtitle }</h2>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>webo</p>
        </>
    )
}

FirstApp.propTypes = {
    // Property string & required
    greeting: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    // Property string & required
    subtitle: `Pibardo`,
}

export default FirstApp;