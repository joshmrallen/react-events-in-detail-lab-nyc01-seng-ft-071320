import React from 'react'

function DelayedButton(props){
    //props.onDelayedClick() is a function
    //props.delay is a number representing seconds
    
    const timeout = (event) => {
        event.persist()
        setTimeout(function(){
            props.onDelayedClick(event)
        }, props.delay)
    }
    
    return <button onClick={timeout}>Delayed Click!!!</button>
}

export default DelayedButton
