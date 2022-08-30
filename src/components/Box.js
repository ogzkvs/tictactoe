import React, { useState } from 'react'
import './Box.css'



const Box = (props) => {
    const [value, setValue] = useState('')


    const changeText = () => {
        if (value === "" && props.gameover === false) {
            setValue(props.currentText)
            props.changeChar(props.row, props.col)
        }
    }

    return (<div className='box' onClick={changeText}>{value} </div>)
}

export default Box