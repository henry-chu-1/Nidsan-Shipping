import React, { useState, useEffect } from 'react';

const Tracking = (props) =>{
    
    return(
        <div>
            <h1 className = 'center'> { props.currentCarrier } </h1>
            <h2 className = "center">Tracking</h2>
            <form className = "center">
                <input type = "text" id =" tracking" name = "tracking" ></input>
            </form>
        </div>
    )
}

export default Tracking