import React from 'react';


const Scroll = (props) => {
    // With props.children you can make a scrollable component
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
        {props.children}
        </div>
    )
}

export default Scroll;