import React from 'react'

function CoordinatesButton(props){
    
    const xy = (event) => {
        const coords = [event.clientX, event.clientY]
        props.onReceiveCoordinates(coords)
    }


    return(<button onClick={xy}>Cartesian</button>)
}



export default CoordinatesButton
